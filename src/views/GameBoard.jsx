import React from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import { Button, Grid } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useNavigate } from "react-router-dom";
const GameBoard = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="column"
      height={"100%"}
      spacing={1}
      width={"100%"}
      justifyContent="start"
      alignItems="center"
    >
      <Grid item width={"100%"}>
        <Button
          variant="text"
          startIcon={<ArrowCircleLeftOutlinedIcon />}
          onClick={() => navigate("/")}
        >
          back to Start Menu
        </Button>
      </Grid>
      <Grid item width={"60%"}>
        <Header />
      </Grid>
      <Grid item width={"60%"}>
        <Board />
      </Grid>
    </Grid>
  );
};

export default GameBoard;
