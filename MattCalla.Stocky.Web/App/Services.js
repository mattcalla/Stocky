var mainAppServices = angular.module("mainAppServices", ["ngResource"]);

mainAppServices.factory("Portfolio", [
    "$resource",
    function ($resource) {
        return $resource("/api/Portfolio", {}, {
            query: { method: "GET", isArray: true },
            add: { method: "POST", isArray: false },
            remove: { method: "DELETE", isArray: false }
        });
    }
]);


var url = '/api/Portfolio/';

mainAppServices.factory('portfolioFactory', function ($http) {
    return {
        deletePosition: function (position) {
            return $http.delete(url + position.symbol);
        }
    };
});


