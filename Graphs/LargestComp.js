// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

function largestComponent(graph) {
  const visited = new Set(); 
  let maxSize = -Infinity;

  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (maxSize < size) {
      maxSize = size; 
    }
  }

  return maxSize; 
}

function explore(graph, node, visited) {
  if (visited.has(node)) return 0; 
  visited.add(node);

  let size = 1; 
  for (let neighbour of graph[node]) {
    size += explore(graph, neighbour, visited); 
  }

  return size; 
}

// Time - O(e) where e is the number of edges
// Space - O(n) where n is the number of nodes

const result = largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

console.log(result);