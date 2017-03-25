"use strict";

import ThingsController from 'src/things/ThingsController';
export default {
  name : 'thingsList',
  config : {
    bindings: {  things: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl: 'src/things/components/list/ThingsList.html',
    controller: ThingsController,
  }
};
