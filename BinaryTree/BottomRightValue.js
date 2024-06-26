// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

function bottomRightValue(root) {
  if (root === null) return null;
  const queue =  [ root ];
  let bottomValue = null;

  while (queue.length > 0) {
    const current = queue.shift(); 
    bottomValue = current.val;

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return bottomValue;
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

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const value = bottomRightValue(a);
console.log(value);



