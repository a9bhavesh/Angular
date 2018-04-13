var app=angular.module("calculatorapp",[]);

app.controller("mycapp",function ($scope) {
    this.operator="+";
    this.result="result";
    this.changeoperator=function (opr) {
        this.operator=opr;
    };

    this.findResults=function () {
        console.log(this.num1+" "+this.num2+" "+this.operator);
        switch (this.operator){
            case '+':
                this.result=this.num1+this.num2;
                break;
            case '+':
                this.result=this.num1-this.num2;
                break;
            case '+':
                this.result=this.num1/this.num2;
                break;
            case '+':
                this.result=this.num1*this.num2;
                break;
            default:
                this.result="result";
                break;
        }

    };
    this.clearall=function () {
        this.num1="";
        this.num2="";
        this.operator="";
        this.result="";
    }
});