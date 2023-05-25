import React, { useState } from "react";
import {
  ContentContainer,
  StyledAlert,
  StyledButton,
  StyledHeading,
  StyledTextField,
  ButtonContainer,
} from "../styles";
import { useRecoilState } from "recoil";
import { settingsAtom } from "../../../../recoil/atom/gameAtom";
import { useNavigate } from "react-router-dom";

const VsPlayerContainer = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const navigate = useNavigate();

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleButton1Click = () => {
    setSettings({
      ...settings,
      player1: player1,
      player2: player2,
    });
    navigate("/game");
  };

  return (
    <ContentContainer>
      <StyledHeading>Vs Player</StyledHeading>
      <StyledTextField
        id="player1"
        label="Player 1"
        variant="outlined"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        focused
      />
      <StyledTextField
        id="player2"
        label="Player 2"
        variant="outlined"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        focused
      />
      <StyledAlert severity="info">Player1 will go first</StyledAlert>
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="success"
          onClick={handleButton1Click}
        >
          Start
        </StyledButton>
      </ButtonContainer>
    </ContentContainer>
  );
};

export default VsPlayerContainer;
