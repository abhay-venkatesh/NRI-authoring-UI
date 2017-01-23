import PlansController from 'src/plans/PlansController';

export default {
    name: 'planCards',
    config: {
        bindings: {
            plans: '<'
        },
        templateUrl: 'src/plans/components/PlanCards.html',
        controller: PlansController
    }
};
