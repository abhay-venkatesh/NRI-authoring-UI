"use strict";

var position = {
  name: 'Position (x, y, z)',
  val: '',
};

var physicalTherbligs = [
    {
      name: 'Pick and Drop',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Angle',
          val: '',
        },
        {
          name: 'Arm',
          val: '',
        },
      ],
      things: []
    },
    {
      name: 'Transport Empty',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Angle',
          val: '',
        },
        {
          name: 'Arm',
          val: '',
        },
      ],
      things: []
    },
    {
      name: 'Grasp',
      type: 'physical',
      parameters: [
        position,
        { name: 'Effort',
          val: ''
        } ,
        {
          name: 'Arm',
          val: '',
        },
      ],
     things: []
    },
    {
      name: 'Transport Loaded',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Angle',
          val: '',
        },
        {
          name: 'Arm',
          val: '',
        },
      ],
     things: []
    },
    {
      name: 'Release Load',
      type: 'physical',
      parameters: [
        {
          name: 'Arm',
          val: '',
        },
      ],
     things: []
    },
    {
      name: 'Hold',
      type: 'physical',
      parameters: [
        {
          name: 'Duration',
          val: ''
        },
        { name: 'Grasp Effort',
          val: ''
        } ,
      ],
     things: []
    },
    {
      name: 'Position',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Arm',
          val: '',
        },
      ],
     things: []
    },
    {
      name: 'Preposition',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Arm',
          val: '',
        },
      ],
     things: []
    },
    {
      name: 'Rest',
      type: 'physical',
      parameters: [
        position,
        { name: 'Orientation',
          val: ''
        } ,
        {
          name: 'Duration',
          val: '',
        },
      ],
     things: []
    },
];

var object = {
  name: 'Object',
  type: '',
};

var regionBoundaries = {
  name: 'Region Boundaries (x, y, z)',
  val: '',
};

var searchRoutine = {
  name: ' Search Routine',
  val: '',
};

var selectCriteria = {
  name: 'Select Criteria',
  val: '',
};

var decisionConstraints = {
  name: 'Decision Constraints',
  val: '',
};

var qualityConditions = {
  name: 'Quality Conditions',
  val: '',
};

var initialState = {
  name: 'Initial State',
  val: '',
};

var goalState = {
  name: 'Goal State',
  val: '',
};

var planningConstraints = {
  name: 'Planning Constraints',
  val: '',
};

var cognitiveTherbligs = [
  {
    name: 'Search',
    type: 'cognitive',
    parameters: [
      object,
      regionBoundaries,
      searchRoutine,
    ],
    things: []
  },
  {
    name: 'Find',
    type: 'cognitive',
    parameters: [],
    things: []
  },
  {
    name: 'Select',
    type: 'cognitive',
    parameters: [
      object,
      selectCriteria,
      decisionConstraints,
    ],
    things: []
  },
  {
    name: 'Inspect',
    type: 'cognitive',
    parameters: [
      object,
      qualityConditions,
    ],
    things: []
  },
  {
    name: 'Plan',
    type: 'cognitive',
    parameters: [
      initialState,
      goalState,
      planningConstraints,
    ],
    things: []
  },
];

var objects = {
  name: 'Objects',
  val: '',
};

var goalCriteria = {
  name: 'Goal Criteria',
  val: '',
};

var assemblyConstraints = {
  name: 'Assembly Constraints',
  val: '',
};

var disassemblyConstraints = {
  name: 'Disassembly Constraints',
  val: '',
};

var tool = {
  name: 'Tool',
  val: '',
};

var toolMethods = {
  name: 'Tool Methods',
  val: '',
};
var cogPhysTherbligs = [
  {
    name: 'Assemble',
    type: 'cognitivePhysical',
    parameters: [
      objects,
      goalCriteria,
      assemblyConstraints,
    ],
    things: []
  },
  {
    name: 'Disassemble',
    type: 'cognitivePhysical',
    parameters: [
      objects,
      goalCriteria,
      disassemblyConstraints,
    ],
    things: []
  },
  {
    name: 'Use',
    type: 'cognitivePhysical',
    parameters: [
      tool,
      toolMethods,
    ],
    things: []
  },
];

export default { physicalTherbligs, cognitiveTherbligs, cogPhysTherbligs};
