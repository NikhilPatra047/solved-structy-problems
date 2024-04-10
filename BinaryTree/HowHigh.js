// Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

// If the tree is empty, return -1.

// Recursive Implementation DFS
function howHighRec(root) {
  if (root === null) return -1; 
  const leftPath = howHighRec(root.left); 
  const rightPath = howHighRec(root.right); 

  return 1 + Math.max(leftPath, rightPath);
}

// Time - O(n)
// Space - O(n) where n is the number of nodes

// Breadth First Search Implementation - Iterative
function howHigh(root) {
  if (root === null) return -1; 
  const queue = [ { node: root, level: 0 } ];
  let maxHeight = -Infinity;
  while (queue.length > 0) {
    const { node, level } = queue.shift(); 
    if (level > maxHeight) {
      maxHeight = level; 
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return maxHeight;
}

// Time - O(n)
// Space - O(N) where n is the number of nodes.

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
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g

const result = howHigh(a);
const newResult = howHighRec(a);
console.log(result, newResult);