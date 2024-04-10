// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

function undirectedPath(edges, nodeA, nodeB) {
  const list = adjList(edges);
  const result = explore(list, nodeA, nodeB, new Set());
  return result;
}

function explore(list, src, dst, visited) {
  if (src === dst) return true; 

  if (visited.has(src)) return false; 
  visited.add(src); 

  for (let neighbour of list[src]) {
    if (explore(list, neighbour, dst, visited)) {
      return true; 
    }
  }

  return false; 
}
// Time - O(e) where e is the number of edges
// Space - O(n) where n is the number of nodes 

function adjList(edges) {
  const list = {}; 
  for (let edge of edges) {
    const [ nodeA, nodeB ] = edge; 
    if (!(nodeA in list)) {
      list[nodeA] = [nodeB];
    } else {
      list[nodeA].push(nodeB);
    }
    
    if (!(nodeB in list)) {
      list[nodeB] = [nodeA];
    } else {
      list[nodeB].push(nodeA);
    }
  }

  return list;
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const result = undirectedPath(edges, 'j', 'm'); // -> true

console.log(result);
