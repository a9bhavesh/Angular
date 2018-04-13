angular.module('goodmorningapp',[]).controller('goodmorningctrl',function ($scope) {
    this.times="";
    this.myarray=[];

   this.getTime=function () {
       if(this.times !==null)
       {
           for (var i=0;i<this.times;i++)
           {
              this. myarray[i]=i+1;
           }
       }
       else
       {
           this.myarray= [];
       }
   }
});