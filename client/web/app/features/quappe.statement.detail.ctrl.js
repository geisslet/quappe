angular.module('quappe')
    .controller('quappeStatementDetailCtrl', quappeStatementDetailCtrl);

quappeStatementDetailCtrl.$inject = ['quappeApi', '$routeParams', '$log'];
function quappeStatementDetailCtrl(quappeApi, $routeParams, $log){
    'use strict';

    var vm = this;

    vm.post = {};
    vm.ok = false;

    vm.activate = function(){

        $log.debug('quappeStatementDetailCtrl.activate with $routeParams: ' + JSON.stringify($routeParams));

        if ($routeParams.id){

            vm.ok = true;

            quappeApi.get($routeParams.id)
                .then(function(result){
                    vm.post = result;
                    $log.debug('quappeStatementDetailCtrl.activate Statement: ' + JSON.stringify(vm.post));        
                });
        } else {
            vm.ok = false;
        }

    };
    

    vm.agree = function(){
        vm.post.agree++;
        if (vm.post.voteCon || vm.post.voteCon === false){
            vm.post.dis--;
        }
        vm.post.votePro = true;
        vm.post.voteCon = false;
    };

    vm.dis = function(){
        vm.post.dis++;
        if (vm.post.votePro || vm.post.votePro === false){
            vm.post.agree--;
        }
        vm.post.votePro = false;
        vm.post.voteCon = true;
    };

    vm.argAgree = function(index){
        $log.debug('quappeStatementDetailCtrl.argAgree('+index+')');

        vm.post.args[index].agree++;
        if (vm.post.args[index].voteCon || vm.post.args[index].voteCon === false){
            vm.post.args[index].dis--;
        }
        vm.post.args[index].votePro = true;
        vm.post.args[index].voteCon = false;
    };

    vm.argDis = function(index){
        $log.debug('quappeStatementDetailCtrl.argDis('+index+')');

        vm.post.args[index].dis++;
        if (vm.post.args[index].votePro || vm.post.args[index].votePro === false){
            vm.post.args[index].agree--;
        }
        vm.post.args[index].votePro = false;
        vm.post.args[index].voteCon = true;
    };
}