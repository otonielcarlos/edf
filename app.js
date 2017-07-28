var app = angular.module("elDiarioFintech", ["ngRoute"]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'home.html',
        controller: 'MainCtrl'
    }).when('/conocenos', {
        templateUrl: 'about.html',
        controller: 'aboutCtrl'

    }).when('/contacto', {
        templateUrl: 'contact.html',
        controller: 'contactCtrl'

    })

}])


app.controller("MainCtrl", ["$scope", function ($scope) {
//    $scope.test = "éxito!"
}]);
app.controller("contactCtrl", ["$scope", function ($scope) {
//    $scope.test = "éxito2!"
}]);
app.controller("aboutCtrl", ["$scope", function ($scope) {
//    $scope.test = "éxito3!"
}]);