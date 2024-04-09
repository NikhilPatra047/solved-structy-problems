// Return the sum of all values in a tree 

function treeSumBFS(root) {
  if (root === null) return 0; 
  const queue = [ root ]; 
  let sum = 0; 

  while (queue.length > 0) {
    const current = queue.shift(); 
    sum += current.val; 

    if (current.left !== null) {
      queue.push(current.left); 
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return sum;
}

// Time O(n)
// Space O(n) where n is the number of nodes

function treeSum(root) {
  if (root === null) return 0; 

  let sum = 0; 
  sum = root.val + treeSum(root.left) + treeSum(root.right); 

  return sum; 
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

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = treeSum(a);
const newResult = treeSumBFS(a);
console.log(result, newResult);