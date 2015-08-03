var bithacksApp = angular.module('bithacksApp', ['ngSanitize']);

bithacksApp.controller('BitHacksController', ['$scope', function($scope) {
    $scope.operation_sets = bithackCollection.getOperationSets();
    $scope.mnemonics = bithackCollection.getAllMnemonics();

    $scope.applyFilter = function(mnemonic) {
        $scope.operation_sets = bithackCollection.getOperationSets(mnemonic);
    }
}]);
