angular.module('quappe')
    .controller('quappeHelloCtrl', quappeHelloCtrl);

quappeHelloCtrl.$inject = ['$scope','$log'];
function quappeHelloCtrl($scope,$log){
    'use strict';
    
    var vm = this;

    vm.post = null;

    vm.activate = function(){
        $log.debug('quappeHelloCtrl.activate called');

    };

    vm.submit = function(){
        $log.debug('quappeHelloCtrl.submit called - post: ' + vm.post);
    };

}
