var app=angular.module("Controllerasapp",[]);

//Parent Controller
app.controller("parentctrl",function () {
   this.text="";
});
//Child Controller
app.controller("childctrl",function () {
   this.text="";
});