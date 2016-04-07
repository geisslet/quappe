angular.module('quappe')
    .controller('quappeSignInCtrl', quappeSignInCtrl);

quappeSignInCtrl.$inject = [ 'quappeApi', '$log'];
function quappeSignInCtrl(quappeApi, $log){
        
	var vm = this;

	vm.activate = function(){
		$log.debug('quappeSignInCtrl.activate()');
	};

	vm.signIn = function(){

	};
}