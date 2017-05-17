"use strict";

export default function SequencingGraph() {
  this.edges = [];
}

SequencingGraph.prototype.addEdge = function(node1, node2) {
  if(typeof this.edges[node1] == 'undefined') {
    this.edges[node1] = node2;
  } else if (Array.isArray(this.edges[node1])) {
    this.edges[node1].push(node2);
  } else {
    var prevNode = this.edges[node1];
    this.edges[node1] = [ prevNode, node2 ];
  }
};

SequencingGraph.prototype.containsEdge = function(node1, node2) {
  if(Array.isArray(this.edges[node1])) {
    var edgeFound = false;
    this.edges[node1].forEach(function(entry) {
      if(entry == node2) {
        edgeFound = true;
      }
    });
    if(edgeFound == true) return true;
    else return false;
  } else {
    return (this.edges[node1] == node2);
  }
};
