import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { StyledButton, StyledPaper } from "./styles";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../recoil/atom/gameAtom";
import { getComputerMove } from "../getComputer";

const Board = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  if (!isTimerRunning && board.every((cell) => cell === null)) {
    setIsTimerRunning(true); // Start the timer when the first move is made
  }

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  console.log(settings);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

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
    setTimer(0); // Reset the timer when the game is reset
    setIsTimerRunning(false); // Stop the timer when the game is reset
  };

  return (
    <Grid>
      <StyledPaper>
        <Grid container justifyContent="center" alignItems="center">
          {numbers.map((number) => {
            return (
              <Grid item xs={3.5} key={number}>
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
      </StyledPaper>
      <Grid container item justifyContent="space-between" alignItems="center">
        <Button variant="contained" onClick={handleResetClick}>
          Reset
        </Button>
      </Grid>

      {/* Display the timer */}
      <Grid container item justifyContent="center" alignItems="center">
        <p>Timer: {formatTime(timer)}</p>
      </Grid>
    </Grid>
  );
};

export default Board;
