/**
 * Main App Controller for the Angular Material Starter App
 * @param TherbligsDataService
 * @param PlanCardsDataService
 * @param $mdSidenav
 * @constructor
 */
"use strict";

function AppController(TherbligsDataService, $mdSidenav) {
  var self = this;

  // Therblig Variables
  self.selected = null;
  self.therbligs = [ ];
  self.selectTherblig = selectTherblig;
  self.toggleList = toggleTherbligsList;

  // Plan variables
  self.plans = [ ];

  // Load all library therbligs
  TherbligsDataService
        .loadAllTherbligs()
        .then( function(therbligs) {
          self.therbligs = [].concat(therbligs);
          self.selected = therbligs[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleTherbligsList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectTherblig (therblig) {
    self.selected = angular.isNumber(therblig) ? $scope.therbligs[therblig] : therblig;
  }
}

export default ['TherbligsDataService', '$mdSidenav', AppController];
