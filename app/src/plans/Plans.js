import PlanCards from 'src/plans/components/PlanCards';
import PlanCardsDataService from 'src/plans/services/PlanCardsDataService';
import PlansController from 'src/plans/PlansController';

export default angular
  .module("plans", ['ngMaterial'])
  .controller('PlansController', PlansController)
  .component(PlanCards.name, PlanCards.config)
  .service("PlanCardsDataService", PlanCardsDataService);
