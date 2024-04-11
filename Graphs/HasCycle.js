// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

// White grey black cycle detection algorithm

// Time - O(n ^ 2)
// Space - O(n) where n is the number of nodes.

const hasCycle = (graph) => {
  // todo
  const visited = new Set(); 
  for (let node in graph) {
    if (cycleDetect(graph, node, new Set(), visited)) {
      return true; 
    }
  }

  return false; 
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false; 
  if (visiting.has(node)) return true; 

  visiting.add(node); 

  for (let neighbour of graph[node]) {
    if (cycleDetect(graph, neighbour, visiting, visited)) {
      return true; 
    }
  }

  visiting.delete(node);
  visited.add(node);
  return false; 
}

const result = hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
}); // -> true
console.log(result);
