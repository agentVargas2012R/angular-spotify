'use strict';

describe('mySpotify.spotifyApp module', function() {

  var SpotifyCtrl, $scope, spotify;

  beforeEach(module('mySpotify.spotifyApp'));

  beforeEach( inject( function( $controller, $rootScope, _spotify_) {
    $scope = $rootScope.$new();
    spotify = _spotify_;
    SpotifyCtrl = $controller( 'SpotifyCtrl', { $scope: $scope, spotify: spotify});
  }));

  describe('spotify controller', function(){

    it('should be defined', inject(function($controller) {
          //spec body
    }));
  });
});