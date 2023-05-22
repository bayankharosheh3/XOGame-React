import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  width: "70%",
  height: "70%",
  border: "2px solid #000",
});

const StyledButton = styled(Button)(({ index }) => ({
  width: "200px",
  height: "150px",
  fontSize: "6rem",
  borderRight: index % 3 === 2 ? "0px" : "3px solid #000",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "3px solid #000",
}));

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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
