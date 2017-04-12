'use strict';
var position = {
  name: 'Position (x, y, z)',
  val: '',
};

var tasks = [
    {
      name: 'IKEA Kit',
      type: 'task',
      therbligList: [
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
          things: [
            {
              name: 'A',
              parameters: [
                position,
              ],
              type: 'thing'
            },
          ]
        }
      ],
    },
    {
      name: 'Rothschild Kit',
      type: 'task',
      therbligList: [
      ],
    },
    {
      name: 'Roaster Kit',
      type: 'task',
      therbligList: [
      ],
    },
    {
      name: 'Furniture Kit',
      type: 'task',
      therbligList: [
      ],
    }
];

export default { tasks };
