/**
 * Created by Janne on 24.5.2015.
 */
Template.layout.helpers({
    pageTitle : function() {
        return Session.get('pageTitle');
    }
});