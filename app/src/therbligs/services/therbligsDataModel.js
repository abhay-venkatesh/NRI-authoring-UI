"use strict";

var position = {
  name: 'Position (x, y, z)',
  val: '',
};

var things = [];

var physicalTherbligs = [
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
  },
  {
    name: 'Find',
    type: 'cognitive',
    parameters: [],
  },
  {
    name: 'Select',
    type: 'cognitive',
    parameters: [
      object,
      selectCriteria,
      decisionConstraints,
    ],
  },
  {
    name: 'Inspect',
    type: 'cognitive',
    parameters: [
      object,
      qualityConditions,
    ],
  },
  {
    name: 'Plan',
    type: 'cognitive',
    parameters: [
      initialState,
      goalState,
      planningConstraints,
    ],
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
  },
  {
    name: 'Disassemble',
    type: 'cognitivePhysical',
    parameters: [
      objects,
      goalCriteria,
      disassemblyConstraints,
    ],
  },
  {
    name: 'Use',
    type: 'cognitivePhysical',
    parameters: [
      tool,
      toolMethods,
    ],
  },
];

export default { physicalTherbligs, cognitiveTherbligs, cogPhysTherbligs};
