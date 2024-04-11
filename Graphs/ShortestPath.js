// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

function shortestPath(edges, src, dst) {
  const graph = adjacencyList(edges); 
  const visited = new Set();
  const queue = [ [src, 0] ];

  while (queue.length > 0) {
    const [ node, edge ] = queue.shift(); 
    if (node === dst) return edge; 
    for (let neighbour of graph[node]) {
      if (!(visited.has(neighbour))) {
        visited.add(neighbour); 
        queue.push([ neighbour, edge + 1 ]); 
      }
    }
  } 

  return -1;
}

// Time - O(e)
// Space - O(e) where e is the number of edges

function adjacencyList(edges) {
  const list = {}; 

  for (let edge of edges) {
    const [ a, b ] = edge; 
    if (!(a in list)) list[a] = []; 
    if (!(b in list)) list[b] = []; 

    list[a].push(b); 
    list[b].push(a);
  }

  return list;
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

const result = shortestPath(edges, 'w', 'z'); // -> 2
console.log(result);
