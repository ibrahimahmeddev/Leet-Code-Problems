var grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const numIslands = (grid) => {
  let countIslands = 0;
  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      //check something
      if (grid[rowIndex][colIndex] === "1") {
        // do something
        countIslands++;
        checkWater(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return countIslands;
};

const checkWater = (rowIn, colIn, grid) => {
  if (
    grid[rowIn] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  )
    return;
  grid[rowIn][colIn] = "0";
  checkWater(rowIn + 1, colIn, grid); // bottom
  checkWater(rowIn - 1, colIn, grid); // top
  checkWater(rowIn, colIn + 1, grid); // left
  checkWater(rowIn, colIn - 1, grid); // right
};

console.log(numIslands(grid));
