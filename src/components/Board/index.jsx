import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { StyledButton, StyledPaper } from "./styles";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../recoil/atom/gameAtom";
import { Computer } from "@mui/icons-material";
import { getComputerMove } from "../getComputer";

const calculateWinner = (board) => {
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
  
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winning player (X or O)
      }
    }
  
    return null; // No winner
};

const Board = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);

  console.log(settings.player2)

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winner = calculateWinner(board);

  console.log(winner)
  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      if(settings.player2 === 'computer'){
        console.log('test')
        const computerMove = getComputerMove(newBoard);
        newBoard[computerMove] = "O";
        setBoard(newBoard);
        setCurrentPlayer("X");
      }
    }
  };

  const handleResetClick = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  const renderCell = (index) => {
    return (
      <StyledButton
        index={index}
        onClick={() => handleCellClick(index)}
      >
        {board[index]}
      </StyledButton>
    );
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <StyledPaper>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item>{renderCell(0)}</Grid>
          <Grid item>{renderCell(1)}</Grid>
          <Grid item>{renderCell(2)}</Grid>
          <Grid item>{renderCell(3)}</Grid>
          <Grid item>{renderCell(4)}</Grid>
          <Grid item>{renderCell(5)}</Grid>
          <Grid item>{renderCell(6)}</Grid>
          <Grid item>{renderCell(7)}</Grid>
          <Grid item>{renderCell(8)}</Grid>
        </Grid>
        <Button variant="contained" onClick={handleResetClick}>
          Reset
        </Button>
      </StyledPaper>
    </Grid>
  );
};

export default Board;
