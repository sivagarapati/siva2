var app = angular.module("myApp", []);

app.controller("headerCtrl", headerCtrl);

function headerCtrl($scope) {
    $scope.appName = {
        title: "BookART",
        tagLine: "we have over 1 million Books"
    }

}