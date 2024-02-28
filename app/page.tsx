import GameOfLifeEngine from "@/templates/GameOfLifeEngine";
import React from "react";

const GameOfLifePage: React.FC = () => {

  return (
    <div>
      <h1>Conway&apos;s Game of Life with Next.js, React, Typescript, and Tailwind CSS</h1>
      <GameOfLifeEngine/>
    </div>
  );
};

export default GameOfLifePage;