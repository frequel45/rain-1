import React, { useState, useEffect } from 'react';
import '../styles.css';

const Grid = ({ rows, columns }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => null)
    );
    setGrid(newGrid);
  }, [rows, columns]);

  const generateRandomRaindrop = () => {
    const randomColumn = Math.floor(Math.random() * columns);
    return { row: 0, col: randomColumn, color: `hsl(${Math.random() * 360}, 100%, 50%)` };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex > 0 && prevGrid[rowIndex - 1][colIndex]) {
              return prevGrid[rowIndex - 1][colIndex];
            }
            return null;
          })
        );

        const raindrop = generateRandomRaindrop();
        newGrid[raindrop.row][raindrop.col] = raindrop.color;

        return newGrid;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [columns]);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: cell || 'transparent' }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
