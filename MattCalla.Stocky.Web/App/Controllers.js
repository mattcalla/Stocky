var mainAppControllers = angular.module("mainAppControllers", []);

mainAppControllers.controller("ListController", function ($scope, $http, portfolioApi, portfolioFactory) {

    $scope.positions = portfolioApi.query();

    $scope.add = function() {
        portfolioApi.add($scope.newPosition);

        $scope.positions.push($scope.newPosition);

        $scope.newPosition = null;
    };

    $scope.delete = function (position) {

        portfolioFactory.deletePosition(position);

        var index = $scope.positions.indexOf(position);
        $scope.positions.splice(index, 1);

    };

});


mainAppControllers.controller("AddPositionController", function ($scope, portfolioApi) {

    $scope.add = function () {
        portfolioApi.add($scope.newPosition);

        $scope.newPosition = null;
    };

});
