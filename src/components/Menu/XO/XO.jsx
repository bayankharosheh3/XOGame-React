import React from "react";
import { GridContainer, StyledDiv } from "../styles";
import { Grid } from "@mui/material";

const XO = () => {
  return (
    <GridContainer>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item>
          <StyledDiv index={0}>x</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={1}>x</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={2}>o</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={3}>x</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={4}>o</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={5}>x</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={6}>o</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={7}>x</StyledDiv>
        </Grid>
        <Grid item>
          <StyledDiv index={8}>o</StyledDiv>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default XO;
