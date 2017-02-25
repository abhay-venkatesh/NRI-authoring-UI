"use strict";

var physicalTherbligs = [
    {
      name: 'Transport Empty',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        angle: '',
        arm: '',
      },
    },
    {
      name: 'Grasp',
      type: 'physical',
      parameters: {
        position: '',
        effort: '',
        arm: '',
      },
    },
    {
      name: 'Transport Loaded',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        angle: '',
        arm: '',
      },
    },
    {
      name: 'Release Load',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        angle: '',
        arm: '',
      },
    },
    {
      name: 'Hold',
      type: 'physical',
      parameters: {
        duration: '',
        effort: '',
      },
    },
    {
      name: 'Position',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        arm: '',
      },
    },
    {
      name: 'Preposition',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        arm: '',
      },
    },
    {
      name: 'Rest',
      type: 'physical',
      parameters: {
        position: '' ,
        orientation: '' ,
        duration: '',
      },
    },
];

var cognitiveTherbligs = [
  {
    name: 'Search',
    type: 'cognitive',
    parameters: {
      object: '',
      regionBoundaries: '',
      searchRoutine: '',
    },
  },
  {
    name: 'Find',
    type: 'cognitive',
    parameters: {
    },
  },
  {
    name: 'Select',
    type: 'cognitive',
    parameters: {
      object: '',
      selectCriteria: '',
      decisionConstraints: '',
    },
  },
  {
    name: 'Inspect',
    type: 'cognitive',
    parameters: {
      object: '',
      qualityConditions: '',
    },
  },
  {
    name: 'Plan',
    type: 'cognitive',
    parameters: {
      initialState: '',
      goalState: '',
      planningConstraints: '',
    },
  },
];

var cogPhysTherbligs = [
  {
    name: 'Assemble',
    type: 'cognitivePhysical',
    parameters: {
      object: '',
      goalCriteria: '',
      assemblyConstraints: '',
    },
  },
  {
    name: 'Disassemble',
    type: 'cognitivePhysical',
    parameters: {
      object: '',
      goalCriteria: '',
      disassemblyConstraints: '',
    },
  },
  {
    name: 'Use',
    type: 'cognitivePhysical',
    parameters: {
      tool: '',
      toolMethods: '',
    },
  },
];

export default { physicalTherbligs, cognitiveTherbligs, cogPhysTherbligs};
