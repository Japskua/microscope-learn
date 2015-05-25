/**
 * Created by Janne on 25.5.2015.
 */
Template.postSubmit.onCreated(function() {
    Session.set('postSubmitErrors', {} );
});

Template.postSubmit.helpers({
    errorMessage : function(field) {
        return Session.get('postSubmitErrors')[field];
    },
    errorClass : function(field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    }
});

Template.postSubmit.events({
    'submit form' : function(e) {
        e.preventDefault();

        var post = {
            url : $(e.target).find('[name=url]').val(),
            title : $(e.target).find('[name=title]').val()
        };

        // Check for validation errors
        var errors = validatePost(post);
        if (errors.title || errors.url) {
            return Session.set('postSubmitErrors', errors);
        }

        Meteor.call('postInsert', post, function(error, result) {
            // Display the error to user and abort
            if(error) {
                return throwError(error.reason)
            }

            // Show this result but route anyway
            if (result.postExists) {
                return throwError('This link has already been posted');
            }
            Router.go('postPage', { _id : result._id});
        });

    }
});