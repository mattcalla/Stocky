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
            otherwise({
                redirectTo: "/list"
            });

    }
]);