// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Therbligs from 'src/therbligs/Therbligs';

export default angular.module( 'starter-app', [ 'ngMaterial', Therbligs.name] )
  .config(($mdThemingProvider) => {

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })
  .controller('AppController', AppController);
