var app=angular.module("controllerapp",[]);

//Parent Controller
app.controller("parentctrl",function ($scope) {
$scope.text="";
});

//Child Controller
app.controller("childctrl",function ($scope) {
$scope.text="";
});