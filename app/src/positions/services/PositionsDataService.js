"use strict";

function PositionsDataService($q) {
  var positions = [];

  // Promise-based API
  return {
    loadAllPositions: function() {
      // Simulate async nature of real remote calls
      return $q.when(positions);
    }
  };
}

export default ['$q', PositionsDataService];
