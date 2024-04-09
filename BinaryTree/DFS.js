
function dfs(root) {
  if (root === null) return []; 
  const stack = [ root ]; 

  while (stack.length > 0) {
    const current = stack.pop(); 
    console.log(current.val); 

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left); 
    }
  }
}

// Time - O(n)
// Space - O(n) where n is the number of nodes

function dfsRec(root) {
  if (root === null) return; 

  console.log(root.val); 
  dfsRec(root.left); 
  dfsRec(root.right); 

  return; 
}

// Time O(n^2)
// Space O(n)

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


dfs(a);
dfsRec(a);