'use strict';

function EditModalService($mdDialog) {

  this.openModal =  () => {
    var alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
          });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
}

export default [ '$mdDialog', EditModalService ];
