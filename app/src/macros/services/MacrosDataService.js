"use strict";
import allMacros from 'src/macros/services/MacrosDataModel';

function MacrosDataService($q) {
  var macros = allMacros;

  // Promise-based API
  return {
    loadAllMacros: function() {
      // Simulate async nature of real remote calls
      return $q.when(macros);
    }
  };
}

export default ['$q', MacrosDataService];
