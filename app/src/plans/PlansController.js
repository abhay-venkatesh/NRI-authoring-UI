"use strict";

function PlansController(PlanCardsDataService) {
  var self = this;

  self.plans = [];


  // Load all library plans
  PlanCardsDataService
        .loadAllPlans()
        .then( function(plans) {
          self.plans= [].concat(plans);
        });
}

export default [ 'PlanCardsDataService', PlansController ];
