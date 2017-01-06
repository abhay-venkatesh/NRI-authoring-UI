/**
 * Therbligs DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function TherbligsDataService($q) {
  var therbligs = [
    {
      name: 'Transport Empty',
    },
    {
      name: 'Grasp',
    },
    {
      name: 'Transport Loaded',
    },
    {
      name: 'Position',
    },
    {
      name: 'Release',
    },
    {
      name: 'Hold',
    }
  ];

  // Promise-based API
  return {
    loadAllTherbligs: function() {
      // Simulate async nature of real remote calls
      return $q.when(therbligs);
    }
  };
}

export default ['$q', TherbligsDataService];

