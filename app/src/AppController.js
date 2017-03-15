/**
 * Main App Controller for the Angular Material Starter App
 * @param TherbligsDataService
 * @param PlanCardsDataService
 * @param $mdSidenav
 * @constructor
 */
"use strict";

function AppController(TherbligsDataService, PlanCardsDataService, $mdSidenav,
  $mdDialog, $scope, FileSaver, Blob, Upload, $timeout) {
  var self = this;

  // Therblig Variables
  self.selected = null;
  self.physicalTherbligs = []; // List of physical therbligs
  self.cognitiveTherbligs = []; // List of cognitive therbligs
  self.cogPhysTherbligs = []; // List of cognitive-physical therbligs

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

  /*
   * Save plan.
   * @param plan to save
   */
  self.save = (plansToSave) => {
    var textToSave = JSON.stringify(plansToSave);
    var data = new Blob([textToSave], { type: 'text/json;charset=utf-8' });
    FileSaver.saveAs(data, 'plans.json');
  };

  $scope.$watch('file', function(){
    if($scope.file) {
      var r = new FileReader();
      r.onloadend = function(e){
        var data = e.target.result;
        //send your binary data via $http or $resource or do anything else with it
        console.log(data);
        self.plans = JSON.parse(data);
      };
      r.readAsText($scope.file);
    }
  });




  /**
   * Select the current therblig
   * @param menuId
   */
  self.selectTherblig = (therblig) => {
    self.selected = angular.isNumber(therblig) ? $scope.therbligs[therblig] : therblig;
  };

  /**
   * Hide or Show the 'left' sideNav area
   */
  self.toggleList = () => {
    $mdSidenav('left').toggle();
  };
}

export default ['TherbligsDataService', 'PlanCardsDataService','$mdSidenav',
  '$mdDialog', '$scope', 'FileSaver', 'Blob', 'Upload', '$timeout', AppController];
