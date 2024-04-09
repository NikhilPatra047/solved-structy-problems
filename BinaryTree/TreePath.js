function treePath(root, target) {
  if (root === null) return null; 
  if (root.val === target) return [root.val]; 

  const leftPath = treePath(root.left, target); 
  if (leftPath !== null) return [root.val, ...leftPath]; 

  const rightPath = treePath(root.right, target); 
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
}

// Time - O(n ^ 2)
// Space - O(n)

function treePathWPush(root, target) {
  const result = _treePathWPush(root, target);

  if (result === null) {
    return null; 
  }

  return result.reverse();
}

function _treePathWPush(root, target) {
  if (root === null) return null; 
  if (root.val === target) return [ root.val ]; 

  const leftPath = _treePathWPush(root.left, target); 
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath; 
  }

  const rightPath = _treePathWPush(root.right, target); 
  if (rightPath !== null) {
    rightPath.push(root.val); 
    return rightPath; 
  }

  return null;
}

// O (n) - time
// O(n) - Space 

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

const result = treePath(a, 'f');
const newResult = treePathWPush(a, 'f');
console.log(result, newResult);