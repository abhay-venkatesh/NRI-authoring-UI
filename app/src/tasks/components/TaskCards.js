'use strict';
import TasksController from 'src/tasks/TasksController';
export default {
    name: 'taskCards',
    config: {
      bindings: {
        tasks: '<', selected: '<', showDetails: '&onSelected'
      },
      templateUrl: 'src/tasks/components/TaskCards.html',
      controller: TasksController,
    }
};
