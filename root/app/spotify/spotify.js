//https://github.com/eddiemoore/angular-spotify
var app = angular.module('mySpotify.spotifyApp', ['ngRoute', 'spotify']);

app.config(['$routeProvider', 'SpotifyProvider', function($routeProvider, SpotifyProvider) {
  $routeProvider.when('/spotify', {
    templateUrl: 'spotify/spotify.html',
    controller: 'SpotifyCtrl'
  });

  SpotifyProvider.setClientId('0e03bdcf17e940d4a25ad0b7f28f957e');
  SpotifyProvider.setRedirectUri('http://localhost:8000/app/callback.html');
  SpotifyProvider.setScope('user-follow-read user-follow-modify user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  // If you already have an auth token
  SpotifyProvider.setAuthToken('94e01fbf273e483691c61507ec75f825');
}]);

app.controller('SpotifyCtrl', function($scope, Spotify){

    var spotifyCtrl = this;
    this.login = function(){
        Spotify.login().then(function (data) {
            console.log("Logged In: " +  data);
            spotifyCtrl.auth = {};
            spotifyCtrl.auth = true;
            //need to be logged in to get these!
            spotifyCtrl.getNewReleases();
            spotifyCtrl.getFeaturedPlayLists();
            spotifyCtrl.animateSection(2);
            spotifyCtrl.animateSection(3);
        });
    }


/*
    Spotify.search(['Mudvayne'], 'artist').then(function (data) {
      debugger;
      console.log(data);
      spotifyCtrl.artists = data.artists.items;
    });
*/

    //Young Guns Id:
    Spotify.getArtists('4v4qHupYi7eRJfkniHrp4Z,5BtHciL0e0zOP7prIHn3pP,4RddZ3iHvSpGV4dvATac9X,77SW9BnxLY8rJ0RciFqkHh,35Uu85Pq33mK8x1jYqsHY2,2Pfv2w8a20xzC7Dr7QXRqM').then(function (data) {
        //debugger;
        console.log(data);
        spotifyCtrl.artists = data.artists;
    });

    this.getNewReleases = function(){
        Spotify.getNewReleases({ country: "US" }).then(function(data){
            //debugger;
            spotifyCtrl.albums = data.albums.items;
        });
    };

    this.getFeaturedPlayLists = function(){
        Spotify.getFeaturedPlaylists({country: "US"}).then(function(data){
            //debugger;
            spotifyCtrl.playlists = data.playlists.items;
        });
    }

    this.animateSection = function(element){

       switch(element) {
            case 1:
                angular.element('.be-awesome').boxLoader({
                    direction:"x",
                    position: "100%",
                    effect: "fadeIn",
                    duration: "2s",
                    windowarea: "80%"
                });
                break;
            case 2:
                angular.element('.be-awesomer').boxLoader({
                    direction:"x",
                    position: "100%",
                    effect: "fadeIn",
                    duration: "2s",
                    windowarea: "80%"
                });
                break;
            case 3:
                angular.element('.be-awesomest').boxLoader({
                    direction:"y",
                    position: "100%",
                    effect: "fadeIn",
                    duration: "6s",
                    windowarea: "80%"
                });
                break;
       };
    }

    this.animateSection(1);

    this.followArtist = function(id){
        var currentId = id;
        if(spotifyCtrl.shouldFollow(id)){
            Spotify.follow('artist', id).then(function (data) {
              //debugger;
              console.log(currentId);
              spotifyCtrl.updateUI(currentId);
            });
        }else{
            Spotify.unfollow('artist', id).then(function (data) {
              //debugger;
              console.log(currentId);
              spotifyCtrl.updateUI(currentId);
            });
        }
    }

    this.followPlayList = function(ownerId, playlistId, public){
        public = (public == null || public == undefined ) ? false: public;
        var currentId = playlistId
        console.log("ownerId: " + ownerId + " playlistId: " + playlistId + " public " + public);
        if(spotifyCtrl.shouldFollow(currentId)){
            Spotify.followPlaylist(ownerId, playlistId, true).then(function(data){
                //debugger;
                spotifyCtrl.updateUI(currentId);
            });
        }else{
            Spotify.followPlaylist(ownerId, playlistId, true).then(function(data){
                //debugger;
                spotifyCtrl.updateUI(currentId);
            });
        }
    };

    this.shouldFollow = function(currentId){
        return (angular.element('#' + currentId).text() === 'Follow');
    };

    this.updateUI = function(currentId){
        if(spotifyCtrl.shouldFollow(currentId)){
          angular.element('#' + currentId).attr('title', 'Unfollow').text(' Unfollow');
          angular.element('#' + currentId).removeClass('glyphicon-heart').addClass('glyphicon-remove');
        }else{
          angular.element('#' + currentId).attr('title', 'Follow').text(' Follow');
          angular.element('#' + currentId).removeClass('glyphicon-remove').addClass('glyphicon-heart');
        }
        angular.element('.' + currentId).toggleClass('bounce');
    };
});


