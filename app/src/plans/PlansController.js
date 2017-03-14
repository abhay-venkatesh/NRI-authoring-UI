"use strict";

function PlansController($mdDialog, $scope) {
  var self = this;

  // Variables for Edit Therblig Method
  var therbligToEdit = {};
  var planTherbligList = [];
  /*
   * @param1 event service variable
   * @param2 therblig that needs to be edited
   * @param3 list of therbligs the therblig to be edited is in
   */
  self.editTherblig = (ev, therblig, therbligList) => {
    therbligToEdit = therblig;
    planTherbligList = therbligList;
    $mdDialog.show({
          controller: EditModalController,
          templateUrl: 'src/therbligs/components/edit/EditModal.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
  };

  // Variables for Edit Plan method
  var planToEdit = {};
  var planList = [];
  /*
   * @param1 event service variable
   * @param2 plan that needs to be edited
   * @param3 list of plans that the plan that needs to be edited is in
   */
  self.editPlan = (ev, plan, plans) => {
    planToEdit = plan;
    planList = plans;
    $mdDialog.show({
          controller: EditPlanController,
          templateUrl: 'src/plans/components/EditPlanModal.tmpl.html',
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
        var index = planTherbligList.indexOf(therblig);
        planTherbligList.splice(index, 1);
        $scope.cancel();
    };
  }

  function EditPlanController($scope, $mdDialog) {
    $scope.plan = planToEdit;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.delete = (plan) => {
        var index = planList.indexOf(plan);
        planList.splice(index, 1);
        $scope.cancel();
    };
  }
}

export default [ '$mdDialog', '$scope', PlansController ];
