// Depth First Search 

function DFSRec(graph, source) {
  console.log(source); 
  for (let neighbour of graph[source]) {
    DFSRec(graph, neighbour);
  }
}

// Time - O(e) where e is the number of edges
// Space - O(n) where n is the number of nodes. 

function DFS(graph, source) {
  const stack = [ source ]; 
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

DFS(graph, 'f');
DFSRec(graph, 'f');