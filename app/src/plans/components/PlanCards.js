'use strict';
import TherbligsController from 'src/therbligs/TherbligsController';
export default {
    name: 'planCards',
    config: {
      bindings: {
        plans: '<', selected: '<', showDetails: '&onSelected'
      },
      templateUrl: 'src/plans/components/PlanCards.html',
      controller: TherbligsController
    }
};
