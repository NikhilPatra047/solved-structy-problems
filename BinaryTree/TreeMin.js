function treeMin(root) {
  if (root === null) return Infinity; 

  let min = Infinity; 
  min = Math.min(root.val, treeMin(root.left), treeMin(root.right));

  return min; 
}

// Time - O(N)
// Space - O(N) where N is the number of nodes. Both DFS and BFS are O(N).

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

const result = treeMin(a);
console.log(result);