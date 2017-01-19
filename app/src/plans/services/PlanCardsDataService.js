/**
 * PlanCards DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function PlanCardsDataService($q) {
  var plans = [
    {
      name: 'IKEA Kit',
      therbligList: [
          'Grasp',
          'Unload'
      ]
    },
    {
      name: 'Rothschild Kit',
      therbligList: [
          'Grasp',
          'Unload'
      ]
    },
    {
      name: 'Roaster Kit',
      therbligList: [
          'Grasp',
          'Unload'
      ]
    },
    {
      name: 'Furniture Kit',
      therbligList: [
          'Grasp',
          'Unload'
      ]
    }
  ];

  // Promise-based API
  return {
    loadAllPlans: function() {
      // Simulate async nature of real remote calls
      return $q.when(plans);
    }
  };
}

export default ['$q', PlanCardsDataService];
