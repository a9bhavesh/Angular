var  app=angular.module('clockapp',[]);
app.controller('clockappctrl',function ($scope,$interval) {

    function indianDate() {
        var  today=new  Date();
        var options={timeZone:"Asia/kolkata"};
        $scope.indianTime=today.toLocaleTimeString('en-US',options);
        $scope.indianDate=today.toLocaleDateString('en-US',options);

    }
    indianDate();
    $interval(indianDate,1000);

    function usDate() {
        var  today=new  Date();
        var options={timeZone:"America/New_York"};
        $scope.usTime=today.toLocaleTimeString('en-US',options);
        $scope.usDate=today.toLocaleDateString('en-US',options);

    }
    usDate();
    $interval(usDate,1000);

});

