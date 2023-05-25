import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { StyledButton, StyledPaper } from "./styles";
import { useRecoilState } from "recoil";
import { settingsAtom, timesWinAtom } from "../../recoil/atom/gameAtom";
import { getComputerMove } from "../getComputerMoveHard.js";
import { getComputerMoveEasy } from "../getComuterMoveEasy";
import AlertDialog from "../GameOver";
import { calculateWinner } from "../calculateWinner";

const Board = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const [times, setTimes] = useRecoilState(timesWinAtom);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [timer, setTimer] = useState(0);
  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState("");

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  function displayWinner(newBoard) {
    const winner = calculateWinner(newBoard);

    if (winner !== null) {
      setOpen(true);
      winner === "X"
        ? setWinner(settings.player1)
        : setWinner(settings.player2);
      winner === "X"
        ? setTimes({
          ...times,
          player1: times.player1 + 1,
        })
        : setTimes({
          ...times,
          player2: times.player2 + 1,
        });
      setIsTimerRunning(false);
    }
  }

  function computerMove(newBoard) {
    if (settings.player2 === "computer") {
      if (settings.hard) {
        const computerMove = getComputerMove(newBoard);
        newBoard[computerMove] = "O";
        setBoard(newBoard);
      } else {
        const computerMove = getComputerMoveEasy(newBoard);
        newBoard[computerMove] = "O";
        setBoard(newBoard);
      }

      displayWinner(newBoard);
      setCurrentPlayer("X");
    }
  }

  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      displayWinner(newBoard);
      computerMove(newBoard);
    }
  };

  const handleResetClick = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setTimer(0);
    setIsTimerRunning(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
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
      <Grid container item justifyContent="center" alignItems="center">
        <p>Timer: {formatTime(timer)}</p>
      </Grid>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        setBoard={setBoard}
        winner={winner}
        setIsTimerRunning={setIsTimerRunning}
        setTimer={setTimer}
      />
    </Grid>
  );
};

export default Board;
