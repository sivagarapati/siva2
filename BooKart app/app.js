var app = angular.module("myApp", []);

app.controller("headerCtrl", function($scope) {
    $scope.appName = {
        title: "BookART",
        tagLine: "we have over 1 million Books"
    };
});



app.config(function($routeProvider) {
    $routeProvider.when("/books", {
            templateUrl: "View/book-list.html",
            controller: "booklistCtrl"
        })
        .when("/kart", {
            templateUrl: "View/kart-list.html",
            controller: "kartlistCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        });
});


app.controller("booklistCtrl", function($scope, $http) {
    //$http.get('/data/books.json').then(function(data) {
    //  $scope.books = data;
    $http.get("http://localhost:3000/books")
        .then(function(response) {
            $scope.books = response.data;
        });

});