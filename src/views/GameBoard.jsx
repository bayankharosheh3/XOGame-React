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
          size={'small'}
        >
          back to Start Menu
        </Button>
      </Grid>
      <Grid
        container
        item
        width={"100%"}
        justifyContent="center"
        alignItems="center"
      >
        <Header />
      </Grid>
      <Grid
        item
        container
        width={"100%"}
        justifyContent="center"
        alignItems="center"
      >
        <Board />
      </Grid>
    </Grid>
  );
};

export default GameBoard;
