var app = angular.module("myApp", []);

app.controller("scopeCtrl", scopeCtrl);

function scopeCtrl($scope) {
    $scope.counter = 0;
    $scope.$watch('myText', function() {
        $scope.counter++;

    });

}