"use strict";

import SequencingGraph from 'src/tasks/SequencingGraph';

function TasksController($mdDialog, $scope, $mdToast) {
  var self = this;

  self.updateTherbligThing = (therblig, thing) => {
    therblig.thing = thing;
  };

  self.updateTherbligPosition = (therblig, position) => {
    therblig.parameters[0] = position;
  };

  // Variables for Edit Therblig Method
  var therbligToEdit = {};
  var taskTherbligList = [];

  /*
   * Edit the therblig.
   *
   * @param1 event service variable
   * @param2 therblig that needs to be edited
   * @param3 list of therbligs the therblig to be edited is in
   */
  self.editTherblig = (ev, therblig, therbligList) => {
    therbligToEdit = therblig;
    taskTherbligList = therbligList;
    $mdDialog.show({
          controller: EditModalController,
          templateUrl: 'src/therbligs/components/edit/EditModal.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
  };

  // Variables for Edit Task method
  var taskToEdit = {};
  var taskList = [];
  var macrosToEdit = [];

  /*
   * @param1 event service variable
   * @param2 task that needs to be edited
   * @param3 list of tasks that the task that needs to be edited is in
   */
  self.editTask = (ev, task, tasks, macros) => {
    taskToEdit = task;
    taskList = tasks;
    macrosToEdit = macros;
    $mdDialog.show({
          controller: EditTaskController,
          templateUrl: 'src/tasks/components/EditTaskModal.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
  };

  function EditModalController($scope, $mdDialog) {
    $scope.therblig = therbligToEdit;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.delete = (therblig) => {
        var index = taskTherbligList.indexOf(therblig);
        taskTherbligList.splice(index, 1);
        $scope.cancel();
    };
  }

  function EditTaskController($scope, $mdDialog) {
    $scope.task = taskToEdit;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.delete = (task) => {
        var index = taskList.indexOf(task);
        taskList.splice(index, 1);
        $mdDialog.cancel();
    };

    $scope.saveMacro = (macroName, therbligs) => {
      var newMacro = {
        name: macroName,
        therbligsList: therbligs,
        type: "macro"
      };
      macrosToEdit.push(newMacro);
      $mdDialog.cancel();
    };
  }

  /*
   * Sequencing Rules
   */
  var graph = new SequencingGraph();
  graph.addEdge("Transport Empty", "Transport Loaded");
  graph.addEdge("Transport Empty", "Release Load");
  graph.addEdge("Transport Empty", "Hold");
  graph.addEdge("Grasp", "Transport Empty");
  graph.addEdge("Grasp", "Pick and Drop");
  graph.addEdge("Transport Loaded", "Transport Empty");

  /*
   * Drop callback for Task TherbligsList
   */
  self.dropCallBack = (index, item, external, type, therbligsList) => {
    // If item being dropped is a therblig
    if(type == "physical" || type == "cognitive" || type == "cognitivephysical") {

      // Return the item if the TherbligsList is empty
      if(index - 1 < 0) return item;

      // Check if the therblig sequence is allowed
      if(graph.containsEdge(therbligsList[index - 1].name, item.name)) {
        self.showActionToast();
        return false;
      } else return item;

    // Else the item being dropped is a Macro
    } else {
      item.therbligsList.forEach(function(entry) {
        therbligsList.push(entry);
      });
      return true;
    }
  };

  /*
   * Notification for therblig sequencing.
   */
  var last = {
        bottom: true,
        top: false,
        left: false,
        right: true
      };

  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
    sanitizePosition();

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = $scope.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }

  self.showActionToast = function() {
      var pinTo = $scope.getToastPosition();
      var toast = $mdToast.simple()
        .textContent('Incorrect therblig sequencing. ')
        .action('OK')
        .highlightAction(true)
        .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
        .position(pinTo);

      $mdToast.show(toast).then(function(response) {
        if ( response == 'ok' ) {
        }
      });
    };

}

export default [ '$mdDialog', '$scope', '$mdToast', TasksController ];
