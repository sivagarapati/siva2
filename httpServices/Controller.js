var app = angular.module('myApp', []);

//app.service("dataBase", function ($http) {
//    return {
//        getData: function () {
//            return $http.get("database.json",{responseType:"json"});
//        }
//    }
//})

//app.controller("peopleCtrl", function ($scope, dataBase) {
//    dataBase.getData().success(function (records) {
//        $scope.persons = records;
//    })
//})


app.controller("people", function ($scope, $http) {
    $http.get("http://127.0.0.1/AngulatJs/httpServices/data.json")
        .then(function (response) {
            $scope.persons = response.records;
            $scope.name = "siva";
        });
});

app.controller("namectrl", function ($scope) {
    $scope.name = "Siva";
})
