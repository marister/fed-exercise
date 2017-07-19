fedExercise.factory('CommentsApi', function($q, $http){
    return {
        getAllComments: function () {
            return $http.get('/comments/all');
        },
        addComment: function(comment){
            return $http.post('/comments/new', comment);
        }
    };
});