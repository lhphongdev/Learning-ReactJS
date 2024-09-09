import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helper";

const Board = () => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculateWinner(cells));

  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index} />
        ))}
    </div>
  );
};

export default Board;
