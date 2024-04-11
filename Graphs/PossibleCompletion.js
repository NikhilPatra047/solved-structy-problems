// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

// Represent the problem in terms of diagrams.
// Understand what exactly is being asked. 
// Apply the correct data structure and algorithm to solve the problem. 
// Analyse the time complexity and space complexity.

// White-grey-black cycle detection algorithm

// Time - O(n + p)
// Space - O(n) where n is the number of course 
// p is the number of prerequisites.

function prereqsPossible(numCourses, prereqs) {
  const visiting = new Set(); 
  const visited = new Set(); 

  const graph = adjacencyList(numCourses, prereqs);
  for (let node in graph) {
    if (cycleDetect(node, graph, visiting, visited)) {
      return false;  
    }
  }

  return true; 
}

function cycleDetect(node, graph, visiting, visited) {
  if (visited.has(node)) return false; 

  if (visiting.has(node)) return true; 
  visiting.add(node); 

  for (let neighbour of graph[node]) {

  }
}

function adjacencyList(numCourses, prereqs) {
  const graph = {};
  for (let i = 0; i < numCourses; ++i) {
    graph[i] = []; 
  }

  for (let prereq of prereqs) {
    const [ a, b ] = prereq; 
    graph[a].push(b); 
  }

  return graph;
}

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
prereqsPossible(numCourses, prereqs); // -> true
