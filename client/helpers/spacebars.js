/**
 * Created by Janne on 26.5.2015.
 */
Template.registerHelper('pluralize', function(n, thing) {
    // Fairly stupid pluralizer
    if (n===1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});