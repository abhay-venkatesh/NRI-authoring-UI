/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
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
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];

