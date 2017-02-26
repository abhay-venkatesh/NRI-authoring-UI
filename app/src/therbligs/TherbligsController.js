'use strict';

function TherbligsController($mdDialog, $scope) {
  var self = this;
  var therbligToEdit = {};
  self.editTherblig = (ev, therblig) => {
    therbligToEdit = therblig;
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
  }}

export default [ '$mdDialog', '$scope', TherbligsController ];
