angular.module('quappe')
    .controller('quappeBrowseCtrl', quappeBrowseCtrl);

quappeBrowseCtrl.$inject = ['quappeApi', '$log'];
function quappeBrowseCtrl (quappeApi, $log) {
    
    var vm = this;

    //vm.browseResult = {};

    vm.activate = function(){
        $log.debug('quappeBrowseCtrl.activate() called.');
        quappeApi.browse()
        .then(function(result){
            $log.debug('quappeBrowseCtrl.activate.browse(): ' + JSON.stringify(result.data));
            vm.browseResult = result.data;
        });
    };

    vm.search = function(msg){

    };

    vm.agree = function(index){
        vm.browseResult[index].agree++;
    };

    vm.dis = function(index){
        vm.browseResult[index].dis++;
    };

}