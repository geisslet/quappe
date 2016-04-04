angular.module('quappe')
    .controller('quappeStatementPostCtrl', quappeStatementPostCtrl);
    //.controller('quappeStatementPostCtrl', ['quappeApi', function (quappeApi){

quappeStatementPostCtrl.$inject = ['quappeApi'];
function quappeStatementPostCtrl(quappeApi){

	console.log('post controller');

	var vm = this;

	vm.status = { status: 'voll in butter'}; 

	quappeApi.status()
		.then(function(resp){
			console.log('quappeStatementPostCtrl: ' + JSON.stringify(vm.status));
			vm.status = resp;
		}, function(error){
			console.log('quappeStatementPostCtrl: ' + JSON.stringify(vm.status));
		});
}