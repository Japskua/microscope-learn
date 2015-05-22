/**
 * Created by Janne on 22.5.2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});