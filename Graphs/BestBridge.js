// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

// Time - O(rc)
// Space - O(rc) where r is the number of row, and c is the number of columns

function inBounds(grid, r, c) {
  const rowInBounds = r >= 0 && r < grid.length; 
  const colInBounds = c >= 0 && c < grid[0].length; 

  return rowInBounds && colInBounds;
}

function explore(grid, r, c, visited) {
  if (!inBounds(grid, r, c) || grid[r][c] === 'W') return visited; 

  const pos = r + ',' + c; 
  if (visited.has(pos)) return visited; 
  visited.add(pos);

  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return visited;
}

function bestBridge(grid) {
  let mainIsland = null;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const possibleIsland = explore(grid, r, c, new Set()); 
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = []; 
  for (let pos of mainIsland) {
    const [ r, c ] = pos.split(',').map(Number); 
    queue.push([ r, c, 0 ]); 
  }

  while(queue.length > 0) {
    const [ row, col, distance ] = queue.shift(); 

    const pos = row + ',' + col; 
    if (grid[row][col] === 'L' && !(mainIsland.has(pos))) return distance - 1; 

    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let delta of deltas) {
      const [a , b] = delta;
      const neighbourRow = a + row; 
      const neighbourCol = b + col; 

      const neighbourPos = neighbourRow + ',' + neighbourCol; 
      if (inBounds(grid, neighbourRow, neighbourCol) && !(visited.has(neighbourPos))) {
        visited.add(neighbourPos);
        queue.push([ neighbourRow, neighbourCol, distance + 1 ]);
      }
    }
  }

  return -1; 
}

const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

const result = bestBridge(grid); // -> 1
console.log(result);
