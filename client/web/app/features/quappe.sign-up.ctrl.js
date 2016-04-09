angular.module('quappe')
    .controller('quappeSignUpCtrl', quappeSignUpCtrl);

quappeSignUpCtrl.$inject = ['quappeApi', '$log'];
function quappeSignUpCtrl(quappeApi, $log){
    
    'use strict';

    var vm = this;

    vm.activate = function(){
        $log.debug('quappeSignUpCtrl.activate()');
    };

    vm.signUp = function(){

    };
}
