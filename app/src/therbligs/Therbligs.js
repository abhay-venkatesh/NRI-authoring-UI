'use strict';

import TherbligsDataService from 'src/therbligs/services/TherbligsDataService';
import TherbligsList from 'src/therbligs/components/list/TherbligsList';
import TherbligsController from 'src/therbligs/TherbligsController';
import EditModal from 'src/therbligs/components/edit/EditModal';
import EditModalService from 'src/therbligs/services/EditModalService';

export default angular
  .module("therbligs", ['ngMaterial'])
  .controller("TherbligsController", TherbligsController)
  .component(EditModal.name, EditModal.config)
  .component(TherbligsList.name, TherbligsList.config)
  .service("TherbligsDataService", TherbligsDataService)
  .service("EditModalService", EditModalService);
