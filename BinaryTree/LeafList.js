// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

function leafListRec(root) {
  const leaves = []; 
  _leafList(root, leaves);

  return leaves; 
}

function _leafList(root, leaves) {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);

  _leafList(root.left, leaves);
  _leafList(root.right, leaves);
}

function leafList(root) {
  if (root === null) return []; 
  const stack = [ root ];
  const values = []; 
  
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left === null && current.right === null) values.push(current.val);

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  } 

  return values;
}

// Time - O(n)
// Space - O(n) where n is the number of nodes

class Node {
  constructor(val) {
    this.val = val; 
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = leafList(a);
const newResult = leafListRec(a);
console.log(result, newResult);