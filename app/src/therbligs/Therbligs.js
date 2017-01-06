// Load the custom app ES6 modules

import TherbligsDataService from 'src/therbligs/services/TherbligsDataService';
import TherbligsList from 'src/therbligs/components/list/TherbligsList';

// Define the Angular 'therbligs' module

export default angular
  .module("therbligs", ['ngMaterial'])
  .component(TherbligsList.name, TherbligsList.config)
  .service("TherbligsDataService", TherbligsDataService);
