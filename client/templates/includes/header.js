/**
 * Created by Janne on 26.5.2015.
 */
Template.header.helpers({
    activeRouteClass : function(/*route names*/) {
        var args = Array.prototype.slice.call(arguments, 0);
        // Remove the arguments added by spacebars
        args.pop();

        var active = _.any(args, function(name) {
            return Router.current() && Router.current().route.getName() === name;
        });

        // false && mystring returns false, true && mystring returns mystring
        return active && 'active';
    }
});