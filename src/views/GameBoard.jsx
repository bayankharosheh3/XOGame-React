import React from "react";
import Board from "../components/Board";
import { Link } from "react-router-dom";

const GameBoard = () => {
  return (
    <><Link to="/">start</Link>
      <Board />
    </>
  );
};

export default GameBoard;
