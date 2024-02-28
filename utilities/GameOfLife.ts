export const GRID_WIDTH = 200;
export const GRID_HEIGHT = 100;


export const generateInitialGrid = (): boolean[][] => {
    let grid = new Array(GRID_HEIGHT);
    for (let i = 0; i < GRID_HEIGHT; i++) {
      grid[i] = new Array(GRID_WIDTH).fill(false).map(() => Math.random() < 0.1);
    }
    return grid;
  };

  
  export const getNextGeneration = (grid: boolean[][]): boolean[][] => {
    const nextGrid = grid.map(arr => [...arr]);
  
    for (let col = 0; col < GRID_HEIGHT; col++) {
      for (let row = 0; row < GRID_WIDTH; row++) {
        const aliveNeighbors = getAliveNeighbors(grid, row, col);
        if (grid[col][row]) {
          if (aliveNeighbors < 2 || aliveNeighbors > 3) nextGrid[col][row] = false;
        } else {
          if (aliveNeighbors === 3) nextGrid[col][row] = true;
        }
      }
    }
  
    return nextGrid;
  };
  
  const getAliveNeighbors = (grid: boolean[][], row: number, col: number): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Skip the cell itself
        const newCol = col + i;
        const newRow = row + j;
        if (newRow >= 0 && newRow < GRID_WIDTH && newCol >= 0 && newCol < GRID_HEIGHT && grid[newCol][newRow]) {
          count++;
        }
      }
    }
    return count;
  };

  
