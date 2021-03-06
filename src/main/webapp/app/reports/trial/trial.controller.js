(function() {
    'use strict';

    angular
        .module('blackholeApp')
        .controller('TrialController', TrialController);
    TrialController.$inject = ['$scope', '$state', 'DebitTrialBalance', 'CreditTrialBalance', 'GenAccount', 'DebitFoot', 'CreditFoot', 'LastEntry'];

    function TrialController ($scope, $state, DebitTrialBalance, CreditTrialBalance, GenAccount, DebitFoot, CreditFoot, LastEntry) {
        var vm = this;
        $scope.today = new Date();
        $scope.debitbalances = DebitTrialBalance.query({size:200});
        $scope.creditbalances = CreditTrialBalance.query({size:200});
        $scope.genAccounts = GenAccount.query({size:200});
        $scope.debitFoot = DebitFoot.get();
        $scope.creditFoot = CreditFoot.get();
        $scope.lastEntry = LastEntry.get();
    }

})();
