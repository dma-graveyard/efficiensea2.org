/**
 * The main EfficienSea2 app module definition.
 *
 * Define the routes of the single page application.
 */

var app = angular.module('efficiensea2.app', [ 'ngRoute', 'ngSanitize', 'ui.bootstrap' ]);

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html'
    }).when('/partners/:country', {
        templateUrl: 'partials/partners.html'
    }).when('/qa', {
        templateUrl: 'partials/qa.html'
    }).when('/contact', {
        templateUrl: 'partials/contact.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);
