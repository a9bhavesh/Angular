var app=angular.module('likeapp',[]);
app.controller('likeappctr',function ($scope) {

    $scope.likes=0;
    $scope.dislike=0;
    $scope.total=0;

    $scope.liked=function () {
        $scope.likes++;
        $scope.total++;

    }
    $scope.dislikd=function () {
        $scope.dislike--;
        $scope.total++;

    }


});