var mainAppControllers = angular.module("mainAppControllers", []);

function HeaderController($scope, $location) {

    $('.navbar-link').click(function () {

        var navbarToggle = $('.navbar-toggle');
        if (navbarToggle.is(':visible')) {
            navbarToggle.trigger('click');
        }
    });


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

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
