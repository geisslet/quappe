angular.module('quappe')
    .controller('quappeBrowseCtrl', quappeBrowseCtrl);

quappeBrowseCtrl.$inject = ['quappeApi', '$log'];
function quappeBrowseCtrl (quappeApi, $log) {
    
    var vm = this;

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
        if (vm.browseResult[index].voteCon || vm.browseResult[index].voteCon === false){
            vm.browseResult[index].dis--;
        }
        vm.browseResult[index].votePro = true;
        vm.browseResult[index].voteCon = false;
    };

    vm.dis = function(index){
        vm.browseResult[index].dis++;
        if (vm.browseResult[index].votePro || vm.browseResult[index].votePro === false){
            vm.browseResult[index].agree--;
        }
        vm.browseResult[index].votePro = false;
        vm.browseResult[index].voteCon = true;
    };
    
}