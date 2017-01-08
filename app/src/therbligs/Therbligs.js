import TherbligsDataService from 'src/therbligs/services/TherbligsDataService';
import TherbligsList from 'src/therbligs/components/list/TherbligsList';

export default angular
  .module("therbligs", ['ngMaterial'])
  .component(TherbligsList.name, TherbligsList.config)
  .service("TherbligsDataService", TherbligsDataService);
