// Define the 'Plans' module
import PlanCards from 'src/plans/components/PlanCards';

export default angular
  .module("plans", ['ngMaterial'])
  .component(PlanCards.name, PlanCards.config);
