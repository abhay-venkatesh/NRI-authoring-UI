"use strict";
import SamplePlans from 'src/plans/services/SamplePlans';

/**
 * PlanCards DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function PlanCardsDataService($q) {
  var plans = [];

  // Promise-based API
  return {
    loadAllPlans: function() {
      // Simulate async nature of real remote calls
      return $q.when(plans);
    }
  };
}

export default ['$q', PlanCardsDataService];
