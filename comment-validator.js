var errors = {
    NO_COMMENT: 'Comment must be an object',
    NO_EMAIL: 'Comment must have a valid email',
    EMPTY_COMMENT: 'Comment body is empty'
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = {
    validateComment: function(comment){
        if(!comment){
            return errors.NO_COMMENT;
        }
        if(!comment.email || !validateEmail(comment.email)){
            return errors.NO_EMAIL;
        }
        if(!comment.text){
            return errors.EMPTY_COMMENT;
        }
        return false;
    }
};
