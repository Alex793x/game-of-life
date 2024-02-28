"use client";
import React, { useState, useEffect } from 'react';
import { generateInitialGrid, getNextGeneration, GRID_WIDTH, GRID_HEIGHT } from '@/utilities/GameOfLife';

const GameOfLifeEngine: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>(generateInitialGrid());

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => getNextGeneration(prevGrid));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Adjust these values to change the cell size
  const cellSize = '10px'; // Example: 10px x 10px cells

  return (
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_WIDTH}, ${cellSize})`, gridGap: '2px' }}>
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <div key={`${x}-${y}`} className={`cell ${cell ? 'bg-black' : 'bg-white'}`} style={{ width: cellSize, height: cellSize }} />
        ))
      )}
    </div>
  );
};

export default GameOfLifeEngine;
