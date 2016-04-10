angular.module('quappe')
    .controller('quappeAppCtrl', quappeAppCtrl);

quappeAppCtrl.$inject = ['$location', '$log'];
function quappeAppCtrl($location, $log){
    'use strict';
    $log.debug('quappeAppCtrl entered');

    var vm = this;

    vm.activate = function(){
        $log.debug('quappeAppCtrl.activate called.');
    };

    vm.isActive = function (viewLocation) { 
        //$log.debug('quappeAppCtrl.isActive ' + $location.path());
        return viewLocation === $location.path();
    };
}