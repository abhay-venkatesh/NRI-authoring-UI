'use strict';

function EditModalService($mdDialog) {

  this.openModal =  () => {
    var alert = $mdDialog.alert({
            title: 'Edit Therblig',
            textContent: 'Edit the therblig here!',
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
