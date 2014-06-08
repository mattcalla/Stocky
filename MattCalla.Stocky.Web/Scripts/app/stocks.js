
appRoot.controller('StocksController', function ($scope, $location, $resource) {

    var stocksResource = $resource('/api/portfolio', {}, { update: { method: 'PUT' } });
    $scope.stocksList = [];
    
    stocksResource.query(function (data) {
        $scope.stocksList = [];
        angular.forEach(data, function (stockData) {
            $scope.stocksList.push(stockData);
        });
    });

    $scope.selectedStocks = [];

    $scope.stocksGrid = {
        data: 'stocksList',
        multiSelect: false,
        selectedItems: $scope.selectedStocks,
        enableColumnResize: false,
        columnDefs: [
            { field: 'symbol', displayName: 'Ticker', width: '25%' },
            { field: 'name', displayName: 'Stock', width: '25%' },
            { field: 'price', displayName: 'Price', width: '25%' }
        ]
    };


    var init = function () {

    }

    init();
});