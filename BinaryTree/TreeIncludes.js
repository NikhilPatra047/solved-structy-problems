function treeIncludes(root, val) {
  if (root === null) return false;
  if (root.val === val) return true; 

  return treeIncludes(root.left, val) || treeIncludes(root.right, val);
}

// O(n) - Time 
// O(n) - space where n is the number of nodes

function treeIncludesbfs(root, val) {
  if (root === null) return false; 
  const queue = [ root ]; 

  while (queue.length > 0) {
    const current = queue.shift(); 
    if (current.val === val) return true; 
    if (current.left !== null) {
      queue.push(current.left); 
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return false; 
}

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

const result = treeIncludes(a, 'e');
const newResult = treeIncludesbfs(a, 'e'); 
console.log(result, newResult);