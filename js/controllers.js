var bithacksApp = angular.module('bithacksApp', []);

bithacksApp.controller('BitHacksController', ['$scope', function($scope) {
    $scope.operations = bithackCollection.getOperationList();
}]);
