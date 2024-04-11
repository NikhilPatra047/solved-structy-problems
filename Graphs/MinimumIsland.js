// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// Time - O(rc)
// Space - O(rc) where r is the number of rows and c is the number of columns

function minimumIsland(grid) {
  const visited = new Set(); 
  let minSize = Infinity; 
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreIsland(grid, visited, r, c); 
      if (size > 0 && minSize > size) {
        minSize = size; 
      }
    }
  }

  return minSize; 
}

function exploreIsland(grid, visited, r, c) {
  const rowInBounds = r >= 0 && r < grid.length; 
  const colInBounds = c >= 0 && c < grid[0].length; 

  if (!rowInBounds || !colInBounds) {
    return 0; 
  }

  if (grid[r][c] === 'W') return 0; 

  const pos = r + ',' + c; 
  if (visited.has(pos)) return 0; 
  visited.add(pos); 

  let size = 1; 
  size += exploreIsland(grid, visited, r + 1, c); 
  size += exploreIsland(grid, visited, r - 1, c); 
  size += exploreIsland(grid, visited, r, c + 1); 
  size += exploreIsland(grid, visited, r, c - 1); 

  return size;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const result = minimumIsland(grid); // -> 2
console.log(result);
