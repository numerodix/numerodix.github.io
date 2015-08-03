var bithacksApp = angular.module('bithacksApp', ['ngSanitize']);

bithacksApp.controller('BitHacksController', ['$scope', function($scope) {
    $scope.operation_sets = bithackCollection.getOperationSets();
}]);
