"use strict";

import MacrosController from 'src/macros/MacrosController';

export default {
  name : 'macrosList',
  config : {
    bindings: {  macros: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl: 'src/macros/components/MacrosList.tmpl.html',
    controller: MacrosController,
  }
};
