/**
 * Created by Janne on 22.5.2015.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, { sort : {submitted : -1}});
    }
});