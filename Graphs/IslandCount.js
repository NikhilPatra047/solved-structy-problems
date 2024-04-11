// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

function islandCount(grid) {
  const visited = new Set(); 
  let count = 0; 
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIslands(grid, visited, r, c)) {
        count++; 
      }
    }
  }
  return count; 
}

function exploreIslands(grid, visited, r, c) {
  const rowInBounds = r >= 0 && r < grid.length; 
  const colInBounds = c >= 0 && c < grid.length; 

  if (!rowInBounds || !colInBounds) {
    return false; 
  }

  if (grid[r][c] === 'W') return false; 

  const pos = r + ',' + c; 
  if (visited.has(pos)) return false; 
  visited.add(pos); 

  exploreIslands(grid, visited, r + 1, c); 
  exploreIslands(grid, visited, r - 1, c); 
  exploreIslands(grid, visited, r, c + 1); 
  exploreIslands(grid, visited, r, c - 1);
  
  return true; 
}

// Time - O(rc)
// Space - O(rc) where r is the number of rows and c is the number of columns

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const result = islandCount(grid); // -> 3
console.log(result);
