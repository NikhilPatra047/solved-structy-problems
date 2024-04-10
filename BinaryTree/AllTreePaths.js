// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.

function allPaths(root) {
  if (root === null) return []; 
  if (root.left === null && root.right === null) return [ [ root.val ] ];

  let paths = []; 
  const leftPath = allPaths(root.left); 
  for (let path of leftPath) {
    paths.push([ root.val, ...path ]); 
  }

  const rightPath = allPaths(root.right); 
  for (let path of rightPath) {
    paths.push([ root.val, ...path ]);
  }

  return paths;
}

// Time - O(n)
// Space - O(n) where n is the number of nodes.

class Node {
  constructor(val) {
    this.val = val; 
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = allPaths(a);
console.log(result);
