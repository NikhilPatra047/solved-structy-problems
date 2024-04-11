// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

// Time - O(rc)
// Space - O(rc) where r is the number of rows and c is the number of columns

function checkInBounds(row, col, rowLength, colLength) {
  const rowInBounds = row >= 0 && row < rowLength; 
  const colInBounds = col >= 0 && col < colLength;

  return rowInBounds && colInBounds;
}

function closestCarrot(grid, startrow, startcol) {
  const visited = new Set([ startrow + ',' + startcol ]); 
  const queue = [ [ startrow, startcol, 0 ] ]; 

  while (queue.length > 0) {
    const [ r, c, distance ] = queue.shift(); 
    if (grid[r][c] === 'C') return distance; 

    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let delta of deltas) {
      const [ neighbourRow, neighbourCol ] = delta; 
      const row = neighbourRow + r; 
      const col = neighbourCol + c; 

      const pos = row + ',' + col; 
      if (checkInBounds(row, col, grid.length, grid[0].length) && !(visited.has(pos)) && grid[r][c] !== 'X') {
        visited.add(pos); 
        queue.push([ row, col, distance + 1 ]); 
      }
    }
  }

  return -1; 
}

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

const result = closestCarrot(grid, 1, 2); // -> 4
console.log(result);
