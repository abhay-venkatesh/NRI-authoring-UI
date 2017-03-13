"use strict";

function PlansController($mdDialog, $scope) {
  var self = this;
  var therbligToEdit = {};
  var planTherbligList = [];
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

  var planToEdit = {};
  var planList = [];
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
