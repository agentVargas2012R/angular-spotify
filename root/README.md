#Spotify App
FIRST: https://developer.spotify.com/web-api/tutorial/



# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Loading Angular Asynchronously

The angular-seed project supports loading the framework and application scripts asynchronously.  The
special `index-async.html` is designed to support this style of loading.  For it to work you must
inject a piece of Angular JavaScript into the HTML page.  The project has a predefined script to help
do this.

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

### CloudBees

CloudBees have provided a CI/deployment setup:

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/angular-js-clickstart/master/clickstart.json">
<img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

If you run this, you will get a cloned version of this repo to start working on in a private git repo,
along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server


# angular-spotify [![Build Status](https://travis-ci.org/eddiemoore/angular-spotify.svg?branch=master)](https://travis-ci.org/eddiemoore/angular-spotify) [![codecov.io](http://codecov.io/github/eddiemoore/angular-spotify/coverage.svg?branch=master)](http://codecov.io/github/eddiemoore/angular-spotify?branch=master) [![Coverage Status](https://img.shields.io/coveralls/eddiemoore/angular-spotify.svg)](https://coveralls.io/r/eddiemoore/angular-spotify) [![devDependency Status](https://david-dm.org/eddiemoore/angular-spotify/dev-status.svg)](https://david-dm.org/eddiemoore/angular-spotify#info=devDependencies) [![Code Climate](https://codeclimate.com/github/eddiemoore/angular-spotify/badges/gpa.svg)](https://codeclimate.com/github/eddiemoore/angular-spotify)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eddiemoore/angular-spotify?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

angular service to connect to the [Spotify Web API](https://developer.spotify.com/web-api/)

angular-spotify makes heavy use of promises throughout the service

## Usage

Install angular-spotify via bower. Use the --save property to save into your bower.json file.
```shell
bower install angular-spotify --save
```

Include spotify into your angular module
```javascript
var app = angular.module('example', ['spotify']);
```

Most of the functions in Spotify do not require you to authenticate your application. However if you do need to gain access to playlists or a user's data then configure it like this:
```javascript
app.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('<CLIENT_ID>');
  SpotifyProvider.setRedirectUri('<CALLBACK_URI>');
  SpotifyProvider.setScope('<SCOPE>');
  // If you already have an auth token
  SpotifyProvider.setAuthToken('<AUTH_TOKEN>');
});
```
For example:
```javascript
app.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('ABC123DEF456GHI789JKL');
  SpotifyProvider.setRedirectUri('http://www.example.com/callback.html');
  SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  // If you already have an auth token
  SpotifyProvider.setAuthToken('zoasliu1248sdfuiknuha7882iu4rnuwehifskmkiuwhjg23');
});
```


Inject Spotify into a controller to gain access to all the functions available
```javascript
app.controller('MainCtrl', function (Spotify) {

});
```


###Search
####Search for an Item
Get Spotify catalog information about artists, albums, or tracks that match a keyword string.
```javascript
Spotify.search('Search Query', 'type', options);
```
type - Required. A comma-separated list of item types to search across. Valid types are: album, artist, playlist, and track.

#####Options Object (Optional)
 - limit - Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - Optional. The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.

Example:
```javascript
Spotify.search('Nirvana', 'artist').then(function (data) {
  console.log(data);
});
```



###Albums

####Get an Album
Get Spotify catalog information for a single album.
```javascript
Spotify.getAlbum('AlbumID or Spotify Album URI');
```
Example:
```javascript
Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
  console.log(data);
});
```


####Get Several Albums
Get Spotify catalog information for multiple albums identified by their Spotify IDs.
```javascript
Spotify.getAlbums('Array or comma separated list of Album IDs');
```
Example:
```javascript
Spotify.getAlbums('41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37').then(function (data) {
  console.log(data);
});
```


####Get an Album’s Tracks
Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
```javascript
Spotify.getAlbumTracks('AlbumID or Spotify Album URI', options);
```
#####Options Object (Optional)
 - limit - Optional. The maximum number of tracks to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - Optional. The index of the first track to return. Default: 0 (the first object). Use with limit to get the next set of tracks.

Example:
```javascript
Spotify.getAlbumTracks('6akEvsycLGftJxYudPjmqK').then(function (data) {
  console.log(data);
});
```


###Artists
####Get an Artist
Get Spotify catalog information for a single artist identified by their unique Spotify ID or Spotify URI.

```javascript
Spotify.getArtist('Artist Id or Spotify Artist URI');
```
Example
```javascript
Spotify.getArtist('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
  console.log(data);
});
```

####Get Several Artists
Get Spotify catalog information for several artists based on their Spotify IDs.
```javascript
Spotify.getArtists('Comma separated string or array of Artist Ids');
```
Example:
```javascript
Spotify.getArtists('0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin').then(function (data) {
  console.log(data);
});
```

####Get an Artist’s Albums
Get Spotify catalog information about an artist’s albums. Optional parameters can be passed in to filter and sort the response.
```javascript
Spotify.getArtistAlbums('Artist Id or Spotify Artist URI', options);
```

#####Options Object (Optional)
 - album_type - Optional A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. Valid values are:
   - album
   - single
   - appears_on
   - compilation

Example: { album_type: 'album,single' }
 - country - Optional. An ISO 3166-1 alpha-2 country code. Supply this parameter to limit the response to one particular country. Note if you do not provide this field, you are likely to get duplicate results per album, one for each country in which the album is available!
 - limit - The number of album objects to return. Default: 20. Minimum: 1. Maximum: 50. For example: { limit: 2 }
 - offset - Optional. The index of the first album to return. Default: 0 (i.e., the first album). Use with limit to get the next set of albums.


Example:
```javascript
Spotify.getArtistAlbums('1vCWHaC5f2uS3yhpwWbIA6').then(function (data) {
  console.log(data);
});
```


####Get an Artist’s Top Tracks
Get Spotify catalog information about an artist’s top tracks by country.
```javascript
Spotify.getArtistTopTracks('Artist Id or Spotify Artist URI', 'Country Code');
```
The country: an ISO 3166-1 alpha-2 country code.
Example:
```javascript
Spotify.getArtistTopTracks('1vCWHaC5f2uS3yhpwWbIA6', 'AU').then(function (data) {
  console.log(data);
});
```


####Get an Artist’s Related Artists
Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
```javascript
Spotify.getRelatedArtists('Artist Id or Spotify Artist URI');
```
Example:
```javascript
Spotify.getRelatedArtists('1vCWHaC5f2uS3yhpwWbIA6').then(function (data) {
  console.log(data);
});
```



###Tracks
####Get a Track
Get Spotify catalog information for a single track identified by its unique Spotify ID or Spotify URI.
```javascript
Spotify.getTrack('Track Id or Spotify Track URI');
```
Example:
```javascript
Spotify.getTrack('0eGsygTp906u18L0Oimnem').then(function (data) {
  console.log(data);
});
```

####Get Several Tracks
Get Spotify catalog information for multiple tracks based on their Spotify IDs.
```javascript
Spotify.getTracks('Comma separated list or array of Track Ids');
```
Example:
```javascript
Spotify.getTracks('0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G').then(function (data) {
  console.log(data);
});
```



###Playlists
User needs to be logged in to gain access to playlists

####Get a List of a User’s Playlists
Get a list of the playlists owned by a Spotify user. Requires the ```playlist-read-private``` scope
```javascript
Spotify.getUserPlaylists('user_id', options);
```
#####Options Object (Optional)
 - limit - Optional. The maximum number of playlists to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - Optional. The index of the first playlist to return. Default: 0 (the first object). Use with limit to get the next set of playlists.

Example:
```javascript
Spotify.getUserPlaylists('wizzler').then(function (data) {
  console.log(data);
});
```

####Get a Playlist
Get a playlist owned by a Spotify user.
```javascript
Spotify.getPlaylist('user_id', 'playlist_id', options);
```
#####Options Object (Optional)
 - fields - Optional. Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. Sub-fields can be excluded by prefixing them with an exclamation mark. [More Info](https://developer.spotify.com/web-api/get-playlist/)

```javascript
Spotify.getPlaylist('1176458919', '6Df19VKaShrdWrAnHinwVO').then(function (data) {
  console.log(data);
});
```


####Get a Playlist’s Tracks
Get full details of the tracks of a playlist owned by a Spotify user. Requires the ```playlist-read-private``` scope.
```javascript
Spotify.getPlaylistTracks('user_id', 'playlist_id', options);
```
Example:
```javascript
Spotify.getPlaylistTracks('1176458919', '6Df19VKaShrdWrAnHinwVO').then(function (data) {
  console.log(data);
});
```

####Create a Playlist
Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.) Creating a public playlist requires the ```playlist-modify-public``` scope. Creating a private playlist requires the ```playlist-modify-private``` scope.
```javascript
Spotify.createPlaylist('user_id', options);
```
#####Options Object
 - name - string - Required. The name for the new playlist, for example "Your Coolest Playlist". This name does not need to be unique; a user may have several playlists with the same name.
 - public - boolean - Optional, default true. If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope.

Example:
```javascript
Spotify.createPlaylist('1176458919', { name: 'Awesome Mix Vol. 1' }).then(function (data) {
  console.log('playlist created');
});
```


####Add Tracks to a Playlist
Add one or more tracks to a user’s playlist. Adding tracks to a public playlist requires the ```playlist-modify-public``` scope. Adding tracks to a private playlist requires the ```playlist-modify-private``` scope.
```javascript
Spotify.addPlaylistTracks('user_id', 'playlist_id', 'comma separated string or array of spotify track uris');
```
#####Options Object (Optional)
 - position - integer - Optional. The position to insert the tracks, a zero-based index. For example, to insert the tracks in the first position: position=0; to insert the tracks in the third position: position=2. If omitted, the tracks will be appended to the playlist. Tracks are added in the order they are listed in the query string or request body.

Example:
```javascript
Spotify
  .addPlaylistTracks('1176458919', '2TkWjGCu8jurholsfdWtG4', 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M')
  .then(function (data) {
    console.log('tracks added to playlist');
  });
```


####Remove Tracks from a Playlist
Remove one or more tracks from a user’s playlist. Removing tracks from a public playlist requires the ```playlist-modify-public``` scope. Removing tracks from a private playlist requires the ```playlist-modify-private``` scope.
```javascript
Spotify.removePlaylistTracks('user_id', 'playlist_id', 'comma separated string or array of spotify track ids or uris');
```
Example:
```
Spotify
  .removePlaylistTracks('1176458919', '2TkWjGCu8jurholsfdWtG4', 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M')
  .then(function (data) {
    console.log('tracks removed from playlist');
  });
```

####Reorder a Playlist's Tracks
Reorder a track or a group of tracks in a playlist.
```javascript
Spotify.reorderPlaylistTracks('user_id', 'playlist_id', options);
```
#####Options Object (Required)
 - range_start - integer - Required. The position of the first track to be reordered.
 - range_length - integer - Optional. The amount of tracks to be reordered. Defaults to 1 if not set.
 - insert_before - integer - Required. The position where the tracks should be inserted.
 - snapshot_id - string - Optional. The playlist's snapshot ID against which you want to make the changes.

Example:
```javascript
Spotify.reorderPlaylistTracks('1176458919', '2TkWjGCu8jurholsfdWtG4', {
  range_start: 8,
  range_length: 5,
  insert_before: 0
}).then(function (data) {
  console.log(data);
});
```

####Replace a Playlist’s Tracks
Replace all the tracks in a playlist, overwriting its existing tracks. This powerful request can be useful for replacing tracks, re-ordering existing tracks, or clearing the playlist. Replacing tracks in a public playlist requires the ```playlist-modify-public``` scope. Replacing tracks in a private playlist requires the ```playlist-modify-private``` scope.
```javascript
Spotify.replacePlaylistTracks('user_id', 'playlist_id', 'comma separated string or array of spotify track ids or uris');
```
Example:
```
Spotify
  .replacePlaylistTracks('1176458919', '2TkWjGCu8jurholsfdWtG4', 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M')
  .then(function (data) {
    console.log('tracks removed from playlist');
  });
```


####Change a Playlist’s Details
Change a playlist’s name and public/private state. (The user must, of course, own the playlist.) Changing a public playlist requires the ```playlist-modify-public``` scope. Changing a private playlist requires the ```playlist-modify-private``` scope.
```javascript
Spotify.updatePlaylistDetails('user_id', 'playlist_id', options);
```
#####Options Object (Optional)
 - name - string - Optional. The new name for the playlist, for example "My New Playlist Title".
 - public - Boolean - Optional. If true the playlist will be public, if false it will be private.

Example:
```javascript
Spotify
  .updatePlaylistDetails('1176458919', '2TkWjGCu8jurholsfdWtG4', { name: 'Updated Playlist Title' })
  .then(function (data) {
    console.log('Updated playlist details');
  });
```

###Browse
Discover new releases and featured playlists. User needs to be logged in to gain access to these features.

####Get the featured playlists
Get a list of Spotify featured playlists
```javascript
Spotify.getFeaturedPlaylists(options);
```
#####Options Object (Optional)
 - locale - string - Optional. The desired language, consisting of a lowercase ISO 639 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the results returned in a particular language (where available).
 - country - string - Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
 - timestamp - string - Optional.  A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss. Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM.

Example:
```javascript
Spotify.getFeaturedPlaylists({ locale: "nl_NL", country: "NL" }).then(function (data) {
  console.log(data);
});
```

####Get new releases
Get a list of new album releases featured in Spotify
```javascript
Spotify.getNewReleases(options);
```
#####Options Object (Optional)
 - country - string - Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.

Example:
```javascript
Spotify.getNewReleases({ country: "NL" }).then(function (data) {
  console.log(data);
});
```

####Get categories
Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
```js
Spotify.getCategories(options);
```

##### Options Object (Optional)
 - country - string - Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
 - locale - string - Optional. The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.
 - limit - number - Optional. The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - number - Optional. The index of the first item to return. Default: 0 (the first object). Use with ```limit``` to get the next set of categories.

Example:
```js
Spotify.getCategories({ country: 'SG' }).then(function (data) {
  console.log(data);
});
```

#### Get category
Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
```js
Spotify.getCategory(category_id, options);
```

##### Required
category_id - The Spotify category ID for the category.

##### Options Object (Optional)
 - country - string - Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
 - locale - string - Optional. The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.

Example:
```js
Spotify.getCategory('party').then(function (data) {
  console.log(data);
})
```

#### Get category playlists
Get a list of Spotify playlists tagged with a particular category.
```js
Spotify.getCategoryPlaylists(category_id, options);
```

##### Required
category_id - The Spotify category ID for the category.

##### Options Object (Optional)
 - country - string - Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
 - limit - number - Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - number - Optional. The index of the first item to return. Default: 0 (the first object). Use with ```limit``` to get the next set of items.

 Example:
 ```js
 Spotify.getCategoryPlaylists('party').then(function (data) {
   console.log(data);
 })
 ```


###Follow
These endpoints allow you manage the list of artists and users that a logged in user follows. Following and unfollowing requires the ```user-follow-modify``` scope. Check if Current User Follows requires the ```user-follow-read``` scope.

####Follow Artists or Users
Add the current user as a follower of one or more artists or other Spotify users.
```javascript
Spotify.follow('type', 'ids');
```
type: Required. either ```artist``` or ```user```
Example:
```javascript
Spotify.follow('user', 'exampleuser01').then(function (data) {
  console.log(data);
});
```

####Unfollow Artists or Users
Remove the current user as a follower of one or more artists or other Spotify users.
```javascript
Spotify.unfollow('type', 'ids');
```
type: Required. either ```artist``` or ```user```
Example:
```javascript
Spotify.unfollow('user', 'exampleuser01').then(function (data) {
  console.log(data);
});
```

####Check if Current User Follows
Check to see if the current user is following one or more artists or other Spotify users.
```javascript
Spotify.userFollowingContains('type', 'ids');
```
type: Required. either ```artist``` or ```user```
ids: Required. comma-separated list.
Example:
```javascript
Spotify.userFollowingContains('user', 'exampleuser01').then(function (data) {
  console.log(data);
});
```

####Follow a Playlist
Add the current user as a follower of a playlist. Requires ```playlist-modify-public``` or ```playlist-modify-private``` scope to work.
```javascript
Spotify.followPlaylist('owner_id', 'playlist_id', isPublic);
```
owner_id: The Spotify user ID of the person who owns the playlist.
playlist_id: The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID.
isPublic: Boolean (Optional), default true. If true the playlist will be included in user's public playlists, if false it will remain private.
Example:
```javascript
Spotify.followPlaylist('jmperezperez', '2v3iNvBX8Ay1Gt2uXtUKUT', false).then(function (data) {
  console.log(data);
});
```

####Unfollow a Playlist
Remove the current user as a follower of a playlist. Requires ```playlist-modify-public``` or ```playlist-modify-private``` scope to work.
```javascript
Spotify.unfollowPlaylist('owner_id', 'playlist_id', isPublic);
```
owner_id: The Spotify user ID of the person who owns the playlist.
playlist_id: The Spotify ID of the playlist that is to be no longer followed.
Example:
```javascript
Spotify.unfollowPlaylist('jmperezperez', '2v3iNvBX8Ay1Gt2uXtUKUT').then(function (data) {
  console.log(data);
});
```

####Check if Users Follow a Playlist
Check to see if one or more Spotify users are following a specified playlist.Following a playlist can be done publicly or privately. Checking if a user publicly follows a playlist doesn't require any scopes; if the user is publicly following the playlist, this endpoint returns true.

Checking if the user is privately following a playlist is only possible for the current user when that user has granted access to the ```playlist-read-private``` scope.
```javascript
Spotify.playlistFollowingContains('owner_id', 'playlist_id', 'comma separated string or array of user ids');
```
Example:
```javascript
Spotify.playlistFollowingContains('jmperezperez', '2v3iNvBX8Ay1Gt2uXtUKUT', 'possan,elogain').then(function (data) {
  console.log(data);
});
```


###User Profiles
User needs to be logged in to gain access to user profiles

####Get a User’s Profile
Get public profile information about a Spotify user.
```javascript
Spotify.getUser('user_id');
```
Example:
```javascript
Spotify.getUser('wizzler').then(function (data) {
  console.log(data);
});
```


####Get Current User’s Profile
Get detailed profile information about the current user (including the current user’s username).
```javascript
Spotify.getCurrentUser();
```
Example:
```javascript
Spotify.getCurrentUser().then(function (data) {
  console.log(data);
});
```


###User Library *(may have name changes in next version)*
####Get Current User’s Saved Tracks
Get a list of the songs saved in the current Spotify user’s “Your Music” library. Requires the ```user-library-read``` scope.
```javascript
Spotify.getSavedUserTracks(options);
```
#####Options Object (Optional)
 - limit - Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 - offset - Optional. The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.

```javascript
Spotify.getSavedUserTracks().then(function (data) {
  console.log(data);
});
```

####Check Current User’s Saved Tracks
Check if one or more tracks is already saved in the current Spotify user’s “Your Music” library. Requires the ```user-library-read``` scope.
```javascript
Spotify.userTracksContains('comma separated string or array of spotify track ids');
```
Example:
```javascript
Spotify.userTracksContains('0udZHhCi7p1YzMlvI4fXoK,3SF5puV5eb6bgRSxBeMOk9').then(function (data) {
  console.log(data);
});
```


####Save Tracks for Current User
Save one or more tracks to the current user’s “Your Music” library. Requires the ```user-library-modify``` scope.
```javascript
Spotify.saveUserTracks('comma separated string or array of spotify track ids');
```
Example:
```javascript
Spotify.saveUserTracks('0udZHhCi7p1YzMlvI4fXoK,3SF5puV5eb6bgRSxBeMOk9').then(function (data) {
  console.log(data);
});
```


####Remove Tracks for Current User
Remove one or more tracks from the current user’s “Your Music” library. Requires the ```user-library-modify``` scope.
```javascript
Spotify.removeUserTracks('comma separated string or array of spotify track ids');
```
Example:
```javascript
Spotify.removeUserTracks('0udZHhCi7p1YzMlvI4fXoK,3SF5puV5eb6bgRSxBeMOk9').then(function (data) {
  console.log(data);
});
```

###Authentication
####Login
Will open login window. Requires user to initiate as it will open a pop up window.
Requires client id, callback uri and scope to be set in config.
```javascript
Spotify.login();
```

Example:
```javascript
$scope.login = function () {
  Spotify.login();
};
```

#### Example callback html
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <script type='text/javascript'>//<![CDATA[
  window.onload=function(){
    var target = window.self === window.top ? window.opener : window.parent;

    var hash = window.location.hash;
    if (hash) {
        var token = window.location.hash.split('&')[0].split('=')[1];
        // target.postMessage(token, 'http://example.com/'); // v0.7.0 and below
        localStorage.setItem('spotify-token', token);
    }

  }//]]>  

  </script>
</head>
<body>

</body>
</html>
```

