
// main.js
var fedExercise = angular.module("fedExercise", []);

fedExercise.controller('MainController', function($scope, CommentsApi){
    $scope.comments = null;
    $scope.comment = {
        email: null,
        text: null
    };

    function init(){
        CommentsApi.getAllComments().then(function(res){
            $scope.comments = res.data;
        });
    }
    init();

    $scope.addComment = function(){
        var comment = {
            email: $scope.comment.email,
            text: $scope.comment.text
        };
        $scope.addCommentLoading = true;

        CommentsApi.addComment(comment).then(function(res){
            //add comments to comments array
            $scope.comments.unshift(res.data);
            //clear comments text

            //clear loading
            $scope.addCommentLoading = false;
        }, function(err){
            //handle error

            //clear loading
            $scope.addCommentLoading = false;
        });
    }

    $scope.getDate = function(date){
        if(date){
            return moment(date).fromNow();
        }

    }

});