'use strict';
export default {
    name: 'planCards',
    config: {
        bindings: {
          plans: '<', selected: '<', showDetails: '&onSelected'
        },
        templateUrl: 'src/plans/components/PlanCards.html'
    }
};
