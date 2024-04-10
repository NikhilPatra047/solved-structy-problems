// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

function levelAveragesRec(root) {
  const levels = [];

  _levelAverages(root, levels, 0); 
  const avgs = []; 

  for (let level of levels) {
    if (level.length === 1) {
      avgs.push(...level);
    } else {
      let sum = 0; 
      for (let lev of level) {
        sum += lev;
      }
      avgs.push(sum / level.length);
    }
  }

  return avgs;
}

function _levelAverages(root, levels, levelNum) {
  if (root === null) return; 

  if (levels.length === levelNum) {
    levels[levelNum] = [ root.val ]; 
  } else {
    levels[levelNum].push(root.val);
  }

  _levelAverages(root.left, levels, levelNum + 1);
  _levelAverages(root.right, levels, levelNum + 1);
}

function levelAverages(root) {
  if (root === null) return 0; 
  const queue = [ [root, 0] ]; 
  let values = [];
  let avgs = [];

  while (queue.length > 0) {
    const [ node, level ] = queue.shift(); 
    if (level in values) {
      values[level].push(node.val);
    } else {
      values[level] = [ node.val ];
    }

    if (node.left !== null) {
      queue.push([ node.left, level + 1 ]);
    }

    if (node.right !== null) {
      queue.push([ node.right, level + 1 ]);
    }
  }

  for (let value of values) {
    if (value.length === 1) {
      avgs.push(...value);
    } else {
      let sum = 0; 
      for (let val of value) {
        sum += val;
      }
      avgs.push(sum / value.length);
    }
  }

  return avgs;
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
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = levelAverages(a); 
const newResult = levelAveragesRec(a);
console.log(result, newResult);