/**
 * Main App Controller for the Angular Material Starter App
 * @param TherbligsDataService
 * @param PlanCardsDataService
 * @param $mdSidenav
 * @constructor
 */
"use strict";

function AppController(TherbligsDataService, PlanCardsDataService, $mdSidenav,
  $mdDialog, $scope) {
  var self = this;

  // Therblig Variables
  self.selected = null;
  self.physicalTherbligs = [];
  self.cognitiveTherbligs = [];
  self.cogPhysTherbligs = [];
  self.selectTherblig = selectTherblig;
  self.toggleList = toggleTherbligsList;

  // Plan variables
  self.plans = [];

  // Load all library therbligs
  TherbligsDataService
        .loadAllTherbligs()
        .then( function(therbligs) {
          self.physicalTherbligs = [].concat(therbligs.physicalTherbligs);
          self.cognitiveTherbligs = [].concat(therbligs.cognitiveTherbligs);
          self.cogPhysTherbligs = [].concat(therbligs.cogPhysTherbligs);
        });

  // Load all library plans
  PlanCardsDataService
        .loadAllPlans()
        .then( function(plans) {
          self.plans = [].concat(plans);
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Select the current therblig
   * @param menuId
   */
  function selectTherblig(therblig) {
    self.selected = angular.isNumber(therblig) ? $scope.therbligs[therblig] : therblig;
  }
  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleTherbligsList() {
    $mdSidenav('left').toggle();
  }
}

export default ['TherbligsDataService', 'PlanCardsDataService','$mdSidenav',
  '$mdDialog', '$scope', AppController];
