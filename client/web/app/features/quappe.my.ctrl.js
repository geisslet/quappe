angular.module('quappe')
    .controller('quappeMyCtrl', quappeMyCtrl);

quappeMyCtrl.$inject = ['quappeApi', '$log'];
function quappeMyCtrl(quappeApi, $log){

    var vm = this;

    vm.activate = function(){
        $log.debug('quappeMyCtrl.activate()');
    };

}
