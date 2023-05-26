export function checkDraw(newBoard, setOpen, setWinner, setIsTimerRunning,setTimes,times) {
  if (newBoard.every((cell) => cell !== null)) {
    setOpen(true);
    setWinner("Draw");
    setIsTimerRunning(false);
    setTimes({
      ...times,
      draw: times.draw + 1,
      round: times.round + 1,
    });
  }
}
