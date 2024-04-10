// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

function connectedComponentsCount(graph) {
  const visited = new Set(); 
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++; 
    }
  }

  return count; 
}

// Time - O(e) where e is the number of edges
// space - O(N) where n is the number of nodes

function explore(graph, node, visited) {
  if (visited.has(String(node))) return false; 
  visited.add(String(node)); 

  for (let neighbour of graph[node]) {
    explore(graph, neighbour, visited);
  }

  return true; 
}

const result = connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

console.log(result);