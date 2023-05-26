export function displayWinner(
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
) {
  const winner = calculateWinner(newBoard);

  if (winner !== null) {
    setOpen(true);
    winner === "X" ? setWinner(settings.player1) : setWinner(settings.player2);
    winner === "X"
      ? setTimes({
          ...times,
          player1: times.player1 + 1,
          round: times.round + 1,
        })
      : setTimes({
          ...times,
          player2: times.player2 + 1,
          round: times.round + 1,
        });
    setIsTimerRunning(false);
    if (winner === "X") {
      if (time.max === 0 && time.min === 0) {
        setTime({ max: timer, min: timer });
      } else {
        time.max < timer
          ? setTime({ ...time, max: timer })
          : time.min > timer
          ? setTime({ ...time, min: timer })
          : setTime({ ...time });
      }
    }
  } else {
    checkDraw(newBoard, setOpen, setWinner, setIsTimerRunning, setTimes, times);
  }
}
