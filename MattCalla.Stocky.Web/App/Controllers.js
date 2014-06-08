var mainAppControllers = angular.module("mainAppControllers", []);

mainAppControllers.controller("ListController", function ($scope, $http, Portfolio, portfolioFactory) {

    $scope.positions = Portfolio.query();

    $scope.add = function() {
        Portfolio.add($scope.newPosition);

        $scope.positions.push($scope.newPosition);

        $scope.newPosition = null;
    };

    $scope.delete = function (position) {

        portfolioFactory.deletePosition(position);

        var index = $scope.positions.indexOf(position);
        $scope.positions.splice(index, 1);

    };

});
