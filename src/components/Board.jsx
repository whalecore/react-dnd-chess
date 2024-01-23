import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { canMoveKnight, moveKnight } from "./Game";
import Knight from "./Knight";

const handleSquareClick = (toX, toY) => {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
};

const renderPiece = (x, y, [knightX, knightY]) => {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
};

const renderSquare = (i, knightPosition) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      onClick={() => handleSquareClick(x, y)}
      style={{
        width: "12.5%",
        height: "12.5%",
      }}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};

const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;
