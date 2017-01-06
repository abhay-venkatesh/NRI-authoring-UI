// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Therbligs from 'src/therbligs/Therbligs';

export default angular.module( 'starter-app', [ 'ngMaterial', Therbligs.name] )
  .config(($mdIconProvider, $mdThemingProvider) => {

    $mdIconProvider
      .icon("menu", "./assets/svg/menu.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })
  .controller('AppController', AppController);
