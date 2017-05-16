"use strict";

export default function SequencingGraph() {
  this.edges = [];
}

SequencingGraph.prototype.addEdge = function(node1, node2) {
  this.edges[node1] = node2;
};

SequencingGraph.prototype.containsEdge = function(node1, node2) {
  return (this.edges[node1] == node2);
};
