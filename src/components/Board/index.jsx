import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ResetButton, RestButton, StyledButton, StyledGrid, StyledPaper } from "./styles";
import { useRecoilState } from "recoil";
import {
  currentPlayerAtom,
  settingsAtom,
  timeAtom,
  timesWinAtom,
} from "../../recoil/atom/gameAtom";
import { getComputerMove } from "../getComputerMoveHard.js";
import { getComputerMoveEasy } from "../getComputerMoveEasy";
import AlertDialog from "../GameOver";
import { calculateWinner } from "../calculateWinner";
import { formatTime } from "../formatTime";
import { checkDraw } from "../checkDraw";
import { displayWinner } from "../displayWinner";

const Board = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const [times, setTimes] = useRecoilState(timesWinAtom);
  const [time, setTime] = useRecoilState(timeAtom);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useRecoilState(currentPlayerAtom);
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

      displayWinner(
        newBoard,
        calculateWinner,
        setOpen,
        setWinner,
        settings,
        setTimes,
        times,
        setIsTimerRunning,
        time,
        setTime,
        timer,
        checkDraw
      );
      setCurrentPlayer("X");
    }
  }

  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      displayWinner(
        newBoard,
        calculateWinner,
        setOpen,
        setWinner,
        settings,
        setTimes,
        times,
        setIsTimerRunning,
        time,
        setTime,
        timer,
        checkDraw
      );
      computerMove(newBoard);
    }
  };

  const handleResetClick = () => {
    setBoard(Array(9).fill(null));
    setIsTimerRunning(false);
    setTimer(0);
  };

  return (
    <StyledGrid container justifyContent="center" alignItems="center">
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
        <ResetButton variant="contained" onClick={handleResetClick}>
          Reset
        </ResetButton>
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
        formatTime={formatTime}
      />
    </StyledGrid>
  );
};

export default Board;
