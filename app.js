var app = angular.module("elDiarioFintech", ["ngRoute"]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'home.html',

    }).when('/conocenos', {
        templateUrl: 'about.html',

    }).when('/contacto', {
        templateUrl: 'contact.html'

    })

}])
