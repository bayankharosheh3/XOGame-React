import React, { useState } from "react";
import {
  ContentContainer,
  StyledButton,
  StyledHeading,
  StyledTextField,
  ButtonContainer,
} from "../styles";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../../../recoil/atom/gameAtom";
import { useNavigate } from "react-router-dom";
import { Grid, FormControlLabel, Switch, Button } from "@mui/material";

const VsComputerContainer = ({setSelectedButton}) => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const navigate = useNavigate();

  const [player, setPlayer] = useState("");
  const [hard, setHard] = useState(false);
  const [startFor, setStartFor] = useState(true);

  const handleButton2Click = () => {
    setSettings({
      ...settings,
      player1: player === "" ? settings.player1 : player,
      player2: "computer",
      hard: hard,
      startFor: startFor,
    });
    navigate("/XOGame-React/game");
  };

  const handleButton3Click = () => {
   setSelectedButton(null)
  };


  return (
    <ContentContainer>
      <StyledHeading>Vs Computer</StyledHeading>
      <StyledTextField
        id="player1"
        label="Player"
        focused
        variant="outlined"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => setHard(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Hard"
          />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <ButtonContainer>
        <Button
          variant="contained"
          color="error"
          onClick={handleButton3Click}
        >
          cancel
        </Button>
        <StyledButton
          variant="contained"
          color="success"
          onClick={handleButton2Click}
        >
          Start
        </StyledButton>
      </ButtonContainer>
    </ContentContainer>
  );
};

export default VsComputerContainer;
