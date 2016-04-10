angular.module('quappe')
    .controller('quappeStatementPostCtrl', quappeStatementPostCtrl);
    //.controller('quappeStatementPostCtrl', ['quappeApi', function (quappeApi){

quappeStatementPostCtrl.$inject = ['quappeApi', '$log'];
function quappeStatementPostCtrl(quappeApi, $log){

	console.log('quappeStatementPostCtrl entered');

	var vm = this;

	vm.post = { args: [{arg:'ueberzeug mich 1'},{arg: 'ueberzeug mich 2'}] };
	vm.status = { status: 'voll in butter'}; 

	vm.activate = function(){
		$log.debug('quappeStatementPostCtrl.activate()');
	};


/*
	quappeApi.status()
		.then(function(resp){
			console.log('quappeStatementPostCtrl: ' + JSON.stringify(vm.status));
			vm.status = resp;
		}, function(error){
			console.log('quappeStatementPostCtrl: ' + JSON.stringify(vm.status));
		});*/


	vm.newArgument = function(){
		$log.debug("quappeStatementPostCtrl.newArgument");
		vm.post.args.push({arg:'ueberzeug mich ' + (vm.post.args.length+1) });
	};

	vm.removeArg = function(index){
		$log.debug("quappeStatementPostCtrl.removeArg: " + index);
		vm.post.args.splice(index, 1);
	};
}