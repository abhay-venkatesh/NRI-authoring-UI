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

  // Therblig Plan Modal Variables
  var therbligPlans = [];
  var planToEdit = {};
  var currentPlan = {};

  /*
   * Method to add new plans.
   * @param1 event service
   * @param2 plans object
   */
  self.addPlan = (ev, plans) => {
    therbligPlans = plans;
    $mdDialog.show({
          controller: AddPlanController,
          templateUrl: 'src/plans/components/AddPlanModal.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
  };

  // *********************************
  // Internal methods
  // *********************************

  /*
   * Controller for the modal to add plans
   */
  function AddPlanController($scope, $mdDialog) {
    // Once done, close modal and add the plan to the plan list
    $scope.done = function() {
      $mdDialog.cancel();
      therbligPlans.unshift(currentPlan);
    };

    // Create new plan
    currentPlan =
    {
      name: '',
      therbligList: [
      ],
    };
    $scope.plan = currentPlan;

    $scope.cancel = () => {
      $mdDialog.cancel();
    };
  }

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
