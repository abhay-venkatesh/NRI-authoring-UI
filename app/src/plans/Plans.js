import PlanCards from 'src/plans/components/PlanCards';
import PlanCardsDataService from 'src/plans/services/PlanCardsDataService';

export default angular
  .module("plans", ['ngMaterial'])
  .component(PlanCards.name, PlanCards.config)
  .service("PlanCardsDataService", PlanCardsDataService);
