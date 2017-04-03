var app = angular.module("myApp", []);

app.provider("date", function() {
    return {
        $get: function() {
            return {
                showDate: function() {
                    var date = new Date();
                    return date.getHours();
                }
            }
        }
    }
});
//$route
//$routeProvider

app.controller("providerCtrl", function($scope, date) {
    $scope.Message = date.showDate();
});



function providerCtrl() {

}