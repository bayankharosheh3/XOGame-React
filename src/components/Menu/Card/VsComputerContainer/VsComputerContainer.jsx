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
import { Grid, FormControlLabel, Switch } from "@mui/material";

const VsComputerContainer = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const navigate = useNavigate();

  const [player, setPlayer] = useState("");
  const [hard, setHard] = useState(false);
  const [startFor, setStartFor] = useState(true);


  const handleButton2Click = () => {
    setSettings({
      ...settings,
      player1: player,
      player2: "computer",
      hard: hard,
      startFor:startFor,
    });
    navigate("/game");
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
        onClick={(e) => setPlayer(e.target.value)}
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
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                onChange={(e) => setStartFor(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Go First"
          />
        </Grid>
      </Grid>
      <ButtonContainer>
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
