// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

function hasPathRec(graph, src, dst) {
  if (src === dst) return true; 

  for (let neighbour of graph[src]) {
    if (hasPathRec(graph, neighbour, dst)) {
      return true; 
    }
  }

  return false;
}

// Time - O(e) where e is the number of edges 
// Space - O(n) where n is the number of nodes.

function hasPath(graph, src, dst) {
  const stack = [ src ];
  
  while (stack.length > 0) {
    const current = stack.pop(); 
    if (current === dst) {
      return true; 
    }

    for (let neighbour of graph[current]) {
      stack.push(neighbour); 
    }
  }

  return false; 
}

function hasPathBFS(graph, src, dst) {
  const queue = [ src ]; 

  while (queue.length > 0) {
    const current = queue.shift(); 
    if (current === dst) {
      return true; 
    }

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return false;
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const result = hasPathRec(graph, 'f', 'k'); // true
const newResult = hasPath(graph, 'f', 'k'); 
const bfsResult = hasPathBFS(graph, 'f', 'k');
console.log(result, newResult, bfsResult);
