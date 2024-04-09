// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

function treeValueCountRec(root, target) {
  if (root === null) return 0;
  const match = root.val === target? 1: 0; 
  return match + treeValueCountRec(root.left, target) + treeValueCountRec(root.right, target); 
}

// Time - O(n)
// Space - O(n)

function treeValueCount(root, target) {
  if (root === null) return null;
  const queue = [ root ]; 
  let count = 0; 

  while (queue.length > 0) {
    const current = queue.shift(); 
    if (current.val === target) {
      count++; 
    }

    if (current.left !== null) {
      queue.push(current.left); 
    }

    if (current.right !== null) {
      queue.push(current.right); 
    }
  }

  return count; 
}

// Time - O(n)
// Space - O(n);

class Node {
  constructor(val) {
    this.val = val; 
    this.left = null; 
    this.right = null; 
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = treeValueCount(a, 6);
const newResult = treeValueCountRec(a, 6); 
console.log(result, newResult);