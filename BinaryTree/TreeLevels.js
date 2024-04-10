// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

// Recursive implementation
function treeLevelsRec(root) {
  const levels = []; 
  _treeLevels(root, levels, 0);
  return levels; 
}

function _treeLevels(root, levels, levelNum) {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  _treeLevels(root.left, levels, levelNum + 1); 
  _treeLevels(root.right, levels, levelNum + 1); 
}

// Time - O(n)
// Space - O(n) where n is the number of nodes

function treeLevels(root) {
  if (root === null) return null;
  const queue = [ { node: root, level: 0 } ];
  let values = []; 

  while (queue.length > 0) {
    const { node, level } = queue.shift(); 
    if (level in values) {
      values[level].push(node.val); 
    } else {
      values[level] = [ node.val ];
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return values;
}

// Time - O(n)
// Space - O(n)

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

const result = treeLevels(a);
const newResult = treeLevelsRec(a);
console.log(result, newResult);