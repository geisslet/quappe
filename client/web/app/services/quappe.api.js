    // Service
    //
    // esFactory() creates a configured client instance. Turn that instance
    // into a service so that it can be required by other parts of the application

var api = angular
    .module('quappe')
    .service('quappeApi', quappeApi);

quappeApi.$inject = ['esFactory', '$q']; 
function quappeApi (esFactory, $q) {

    console.log('quappeApi instanciated.');
   
    var esclient = esFactory ({
        host: 'localhost:9200',
        apiVersion: '2.1',
        log: 'trace'
    });
  
    this.status = function () {

        //return { status: 'mock, just a mock. mock style.'};

        return $q(function(resolve, reject){
            esclient.cluster.state({
            metric: [
              'cluster_name',
              'nodes',
              'master_node',
              'version'
            ]
          })
          .then(function (resp) {
            console.log(JSON.stringify(resp));

            this.clusterState = resp;
            this.error = null;

            resolve(resp);
            //return resp;
          })
          .catch(function (err) {
            this.clusterState = null;
            this.error = err;

            reject(err);
            //return err;
            // if the err is a NoConnections error, then the client was not able to
            // connect to elasticsearch. In that case, create a more detailed error
            // message
       /*     if (err instanceof elasticsearch.errors.NoConnections) {
              $scope.error = new Error('Unable to connect to elasticsearch. ' +
                'Make sure that it is running and listening at http://localhost:9200');
            }*/
        });
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