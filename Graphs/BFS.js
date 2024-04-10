// Breadth first search

function BFS(graph, source) {
  const queue = [ source ]; 
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current); 

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
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

BFS(graph, 'f');
