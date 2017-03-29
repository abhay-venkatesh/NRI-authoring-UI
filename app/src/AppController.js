/**
 * Main App Controller for the Angular Material Starter App
 * @param TherbligsDataService
 * @param TaskCardsDataService
 * @param $mdSidenav
 * @constructor
 */
"use strict";

function AppController(TherbligsDataService, TaskCardsDataService,
  ThingsDataService, $mdSidenav, $mdDialog, $scope, FileSaver, Blob, Upload,
  $timeout) {
  var self = this;

  // Things Variables
  self.things = [];

  // Load all library things
  ThingsDataService
    .

  // Therblig Variables
  self.selected = null;
  self.physicalTherbligs = []; // List of physical therbligs
  self.cognitiveTherbligs = []; // List of cognitive therbligs
  self.cogPhysTherbligs = []; // List of cognitive-physical therbligs

  // Task variables
  self.tasks = [];

  // Load all library therbligs
  TherbligsDataService
    .loadAllTherbligs()
    .then( function(therbligs) {
      self.physicalTherbligs = [].concat(therbligs.physicalTherbligs);
      self.cognitiveTherbligs = [].concat(therbligs.cognitiveTherbligs);
      self.cogPhysTherbligs = [].concat(therbligs.cogPhysTherbligs);
    });

  // Load all library Tasks
  TaskCardsDataService
        .loadAllTasks()
        .then( function(tasks) {
          self.tasks = [].concat(tasks);
        });

  // Therblig Task Modal Variables
  var therbligTasks = [];
  var taskToEdit = {};
  var currentTask = {};

  /*
   * Method to add new tasks.
   * @param1 event service
   * @param2 tasks object
   */
  self.addTask = (ev, tasks) => {
    therbligTasks = tasks;
    $mdDialog.show({
          controller: AddTaskController,
          templateUrl: 'src/tasks/components/AddTaskModal.tmpl.html',
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
   * Controller for the modal to add tasks
   */
  function AddTaskController($scope, $mdDialog) {
    // Once done, close modal and add the task to the task list
    $scope.done = function() {
      $mdDialog.cancel();
      therbligTasks.unshift(currentTask);
    };

    // Create new task
    currentTask =
    {
      name: '',
      therbligList: [
      ],
    };
    $scope.task = currentTask;

    $scope.cancel = () => {
      $mdDialog.cancel();
    };
  }

  /*
   * Save task.
   * @param task to save
   */
  self.save = (tasksToSave) => {
    var textToSave = JSON.stringify(tasksToSave);
    var data = new Blob([textToSave], { type: 'text/json;charset=utf-8' });
    FileSaver.saveAs(data, 'tasks.json');
  };

  $scope.$watch('file', function(){
    if($scope.file) {
      var r = new FileReader();
      r.onloadend = function(e){
        var data = e.target.result;
        //send your binary data via $http or $resource or do anything else with it
        console.log(data);
        self.tasks = JSON.parse(data);
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

export default ['TherbligsDataService', 'TaskCardsDataService',
  'ThingsDataService','$mdSidenav', '$mdDialog', '$scope', 'FileSaver', 'Blob',
  'Upload', '$timeout', AppController];
