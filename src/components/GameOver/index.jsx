import * as React from "react";
import {
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogContentText,
  StyledDialogActions,
  StyledButton,
} from "./styles";
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AlertDialog({ open, setOpen, setBoard,winner,setTimer }) {

  const navigate = useNavigate();

  const handleBack = () => {
    setOpen(false);
    setBoard(Array(9).fill(null));
    navigate('/')
  };

  const handleClose = () => {
    setOpen(false);
    setBoard(Array(9).fill(null));
    setTimer(0);
  };

  console.log(winner)

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogTitle>Game Finished</StyledDialogTitle>
        <StyledDialogContent>
          <StyledDialogContentText>The winner is {winner}</StyledDialogContentText>
        </StyledDialogContent>
        <StyledDialogActions>
          <StyledButton onClick={handleBack} variant="outlined">
            Back to Start Page
          </StyledButton>
          <StyledButton onClick={handleClose} variant="outlined">
            Another game
          </StyledButton>
        </StyledDialogActions>
      </Dialog>
    </div>
  );
}
