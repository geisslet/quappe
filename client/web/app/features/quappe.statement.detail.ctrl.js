angular.module('quappe')
    .controller('quappeStatementDetailCtrl', quappeStatementDetailCtrl);

quappeStatementDetailCtrl.$inject = ['quappeApi', '$routeParams', '$log'];
function quappeStatementDetailCtrl(quappeApi, $routeParams, $log){
    var vm = this;

    vm.post = {};

    vm.activate = function(){

        $log.debug('quappeStatementDetailCtrl.activate with $routeParams: ' + JSON.stringify($routeParams));

        if ($routeParams.id){
            quappeApi.get($routeParams.id)
                .then(function(result){
                    vm.post = result;
                    $log.debug('quappeStatementDetailCtrl.activate Statement: ' + JSON.stringify(vm.post));        
                });
        }   
    };
    
    vm.agree = function(){
        vm.post.agree++;
    };

    vm.dis = function(){
        vm.post.dis++;
    };

    vm.argAgree = function(index){
        $log.debug('quappeStatementDetailCtrl.argAgree('+index+')');

        vm.post.args[index].agree++;
    };

    vm.argDis = function(index){
        $log.debug('quappeStatementDetailCtrl.argDis('+index+')');

        vm.post.args[index].dis++;
    };

}