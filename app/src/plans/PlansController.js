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

  var therbligPlans = [];
  var planToEdit = {};
  self.addPlan = (ev, plans, plan) => {
    therbligPlans = plans;
    planToEdit = plan;
    $mdDialog.show({
          controller: AddPlanController,
          templateUrl: 'src/plans/components/AddPlanModal.tmpl.html',
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

    $scope.delete = (plan) => {
        var index = plans.indexOf(plan);
        plans.splice(index, 1);
        $scope.cancel();
    };
  }

    function AddPlanController($scope, $mdDialog) {
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
}

export default [ '$mdDialog', '$scope', PlansController ];
