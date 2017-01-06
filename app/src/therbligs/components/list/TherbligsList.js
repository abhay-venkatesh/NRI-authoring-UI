// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'therbligsList',
  config : {
    bindings         : {  therbligs: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/therbligs/components/list/TherbligsList.html'
  }
};
