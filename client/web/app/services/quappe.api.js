    // Service
    //
    // esFactory() creates a configured client instance. Turn that instance
    // into a service so that it can be required by other parts of the application

angular
    .module('quappe')
    .service('quappeApi', quappeApi);
    //.service('quappeApi', ['', function () {

quappeApi.$inject = ['elasticsearch']; 
function quappeApi (elasticsearch) {

    console.log('quappeApi instanciated.');
/*        
    var esClient = elasticsearch.Client({
        host: 'localhost:9200'
    });
*/
    var esFactory = {};
   
    var esclient = elasticsearch ({
        host: 'localhost:9200',
        apiVersion: '2.1',
        log: 'trace'
    });
  
    this.status = function () {
        esclient.cluster.state({
        metric: [
          'cluster_name',
          'nodes',
          'master_node',
          'version'
        ]
      })
      .then(function (resp) {
        $scope.clusterState = resp;
        $scope.error = null;

        return resp;
      })
      .catch(function (err) {
        $scope.clusterState = null;
        $scope.error = err;

        // if the err is a NoConnections error, then the client was not able to
        // connect to elasticsearch. In that case, create a more detailed error
        // message
   /*     if (err instanceof elasticsearch.errors.NoConnections) {
          $scope.error = new Error('Unable to connect to elasticsearch. ' +
            'Make sure that it is running and listening at http://localhost:9200');
        }*/
      });
    };

    this.get = function (id) {
    
    };

    this.post = function (post) {
        
    };

    this.subpost = function (subpost) {

    };

    this.aggree = function (id) {

    };

    this.disagree = function (id) {

    };

    this.browse = function () {

    };

    this.delete = function () {

    };
}