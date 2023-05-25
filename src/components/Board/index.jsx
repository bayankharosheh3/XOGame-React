import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { StyledButton, StyledPaper } from "./styles";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../recoil/atom/gameAtom";
import { getComputerMove } from "../getComputer";

const calculateWinner = (board) => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
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

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const winner = calculateWinner(board);

  console.log(settings);

  console.log(winner);
  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      if (settings.player2 === "computer") {
        console.log("test");
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

  return (
    <Grid justifyContent="center" alignItems="center">
      <StyledPaper>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          {numbers.map((number) => {
            return (
              <Grid item xs={4}>
                <StyledButton
                  index={number}
                  onClick={() => handleCellClick(number)}
                >
                  {board[number]}
                </StyledButton>
              </Grid>
            );
          })}
        </Grid>
        <Button variant="contained" onClick={handleResetClick}>
          Reset
        </Button>
      </StyledPaper>
    </Grid>
  );
};

export default Board;
