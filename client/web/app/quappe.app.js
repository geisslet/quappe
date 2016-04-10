/* 
    quappe root 

    intention: holds the main navigation and instanciates the angular app

*/ 

var quappeapp = angular 
    .module('quappe', ['ngRoute', 'elasticsearch'])
    .config(route);

function route($routeProvider){

    console.log('quappe.app.viewhandling called');

    $routeProvider
        .when('/browse',{
            templateUrl: 'features/quappe.browse.html',
            name: 'browse'
        })
        .when('/hello',{
            templateUrl: 'features/quappe.hello.html'
        })
        .when('/my',{
            templateUrl: 'features/quappe.my.html',
        })
        .when('/signin',{
            templateUrl: 'features/quappe.sign-in.html',
        })
        .when('/signup',{
            templateUrl: 'features/quappe.sign-up.html',
        })
        .when('/post',{
            templateUrl: 'features/quappe.statement.post.html',
        })
        .when('/detail',{
            templateUrl: 'features/quappe.statement.detail.html',
        })
        .when('/detail/:id',{
            templateUrl: 'features/quappe.statement.detail.html',
        })
        .otherwise({
            redirectTo: 'features/quappe.hello.html'
        });
}