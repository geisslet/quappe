angular.module('quappe')
    .controller('quappeStatementPostCtrl', quappeStatementPostCtrl);
    //.controller('quappeStatementPostCtrl', ['quappeApi', function (quappeApi){

quappeStatementPostCtrl.$inject = ['quappeApi'];
function quappeStatementPostCtrl(quappeApi){

	console.log('post controller');

	var vm = this;

	vm.status = { status: 'voll in butter'}; 
	//vm.status = quappeApi.status();

}