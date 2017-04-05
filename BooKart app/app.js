var app = angular.module("myApp", []);

app.controller("headerCtrl", headerCtrl);

function headerCtrl($scope) {
    $scope.appName = {
        title: "BookART",
        tagLine: "we have over 1 million Books"
    }

}

app.controller("booklistCtrl", booklistCtrl);

function booklistCtrl($scope, $http) {
    var self = this;
    $http.get("http://localhost:3000/books")
        .then(function(response) {
            $scope.books = response.data;
        });
}