// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

function longestPath(graph) {
  const distance = {}; 
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0; 
    }
  }

  for (let node in graph) {
    explore(node, graph, distance); 
  }

  return Math.max(...Object.values(distance)); 
}

function explore(node, graph, distance) {
  if (node in distance) return distance[node]; 
  
  let maxSize = 0; 
  for (let neighbour of graph[node]) {
    const attempt = explore(neighbour, graph, distance); 
    if (maxSize < attempt) maxSize = attempt;
  }

  distance[node] = 1 + maxSize; 
  return distance[node];
}

// Time - O(e)
// Space - O(n) where e is the number of edges 
// n is the number of nodes.

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};

const result = longestPath(graph); // -> 4
console.log(result);
