'use strict';

function MacrosController($mdDialog, $scope) {
  var self = this;
  var macroToEdit;
  self.editMacro = (ev, macro) => {
    macroToEdit = macro;
    $mdDialog.show({
          controller: EditMacroController,
          templateUrl: 'src/macros/components/MacroEditModal.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
  };

  function EditMacroController($mdDialog, $scope) {
    $scope.macro = macroToEdit;
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
}

export default [ '$mdDialog', '$scope', MacrosController ];
