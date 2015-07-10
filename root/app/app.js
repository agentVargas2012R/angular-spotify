'use strict';

// Declare app level module which depends on views, and components
angular.module('mySpotify', [
  'ngRoute',
  'mySpotify.view1',
  'mySpotify.view2',
  'mySpotify.spotifyApp',
  'mySpotify.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/spotify'});
}]);
