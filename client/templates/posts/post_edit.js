/**
 * Created by Janne on 25.5.2015.
 */

Template.postEdit.onCreated(function() {
    Session.get('postEditErrors', {});
});

Template.postEdit.helpers({
    errorMessage : function(field) {
        return Session.get('postEditErrors')[field];
    },
    errorClass : function(field) {
        return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
    }
});

Template.postEdit.events({
    'submit form' : function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        // Error checking
        var errors = validatePost(postProperties);
        if (errors.title || errors.url) {
            return Session.set('postEditErrors', errors);
        }

        Posts.update(currentPostId, {$set : postProperties}, function(error) {
            if(error) {
                // Display the alert to the user
                throwError(error.reason);
            } else {
                Router.go('postPage', {_id : currentPostId});
            }
        });
    },

    'click .delete' : function(e) {
        e.preventDefault();

        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('home');
        }
    }
});