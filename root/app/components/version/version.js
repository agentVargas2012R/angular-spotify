'use strict';

angular.module('mySpotify.version', [
  'mySpotify.version.interpolate-filter',
  'mySpotify.version.version-directive'
])

.value('version', '0.1');
