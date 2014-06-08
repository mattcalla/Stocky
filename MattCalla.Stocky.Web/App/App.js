var mainApp = angular.module("mainApp", [
    "ngRoute",
    "mainAppControllers",
    "mainAppServices"
]);

mainApp.config(["$routeProvider",
    function ($routeProvider) {

        $routeProvider.
            when("/list", {
                templateUrl: "Partials/List.html",
                controller: "ListController"
            }).
            when("/addPosition", {
                templateUrl: "Partials/AddPosition.html",
                controller: "AddPositionController"
            }).
            otherwise({
                redirectTo: "/list"
            });

    }
]);