'use strict';
import PlansController from 'src/plans/PlansController';
export default {
    name: 'planCards',
    config: {
      bindings: {
        plans: '<', selected: '<', showDetails: '&onSelected'
      },
      templateUrl: 'src/plans/components/PlanCards.html',
      controller: PlansController,
    }
};
