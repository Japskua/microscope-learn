/**
 * Created by Janne on 25.5.2015.
 */
// Check that the userId owns the document in question
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};