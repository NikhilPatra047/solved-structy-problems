// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

function semestersRequired(numCourses, prereqs) {
  const graph = adjacencyList(numCourses, prereqs);
  const sems = {}; 
  console.log(graph);
  for (let i = 0; i < numCourses; ++i) {
    if (graph[i].length === 0) sems[i] = 1;
  }

  for (let i = 0; i < numCourses; ++i) {
    explore(graph, sems, i); 
  }

  return Math.max(...Object.values(sems));
}

// Time - O(p)
// Space - O(c) where p is the number of prerequisites and c is the number of courses.

function explore(graph, sems, node) {
  if (node in sems) return sems[node]; 

  let maxSize = 0; 
  for (let neighbour of graph[node]) {
    const attempt = explore(graph, sems, neighbour);
    if (maxSize < attempt) maxSize = attempt; 
  }

  sems[node] = 1 + maxSize; 
  return sems[node];
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
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
const result = semestersRequired(numCourses, prereqs); // -> 3
console.log(result);
