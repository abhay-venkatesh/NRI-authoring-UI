"use strict";

var position = {
  name: 'Position (x, y, z)',
  val: '',
};

var physicalTherbligs = [
    {
      name: 'Pick and Drop',
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
      type: 'therblig',
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
    type: 'therblig',
    parameters: [
      object,
      regionBoundaries,
      searchRoutine,
    ],
    things: []
  },
  {
    name: 'Find',
    type: 'therblig',
    parameters: [],
    things: []
  },
  {
    name: 'Select',
    type: 'therblig',
    parameters: [
      object,
      selectCriteria,
      decisionConstraints,
    ],
    things: []
  },
  {
    name: 'Inspect',
    type: 'therblig',
    parameters: [
      object,
      qualityConditions,
    ],
    things: []
  },
  {
    name: 'Plan',
    type: 'therblig',
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
    type: 'therblig',
    parameters: [
      objects,
      goalCriteria,
      assemblyConstraints,
    ],
    things: []
  },
  {
    name: 'Disassemble',
    type: 'therblig',
    parameters: [
      objects,
      goalCriteria,
      disassemblyConstraints,
    ],
    things: []
  },
  {
    name: 'Use',
    type: 'therblig',
    parameters: [
      tool,
      toolMethods,
    ],
    things: []
  },
];

export default { physicalTherbligs, cognitiveTherbligs, cogPhysTherbligs};
