'use strict';

function TherbligsController($mdDialog, $scope) {
  var self = this;
  var therbligToEdit = {};
  var planTherbligList = [];
  self.editTherblig = (ev, therblig, therbligList) => {
    therbligToEdit = therblig;
    planTherbligList = [].concat(therbligList);
    console.log(planTherbligList);
    $mdDialog.show({
          controller: EditModalController,
          templateUrl: 'src/therbligs/components/edit/EditModal.html',
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
      console.log($scope.plan);
    };
  }}

export default [ '$mdDialog', '$scope', TherbligsController ];
