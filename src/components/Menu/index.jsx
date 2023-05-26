import React, { useState } from "react";
import { ButtonList, Container, GridContainer, StyledButton, StyledDiv, StyledHeading } from "./styles";
import Card from "./Card";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import { useRecoilState } from "recoil";
import { gameAtom } from "../../recoil/atom/gameAtom";
import { Grid } from "@mui/material";
import XO from "./XO/XO";

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const [gameVs, setGameVs] = useRecoilState(gameAtom);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setGameVs(buttonId === 1 ? "player" : "computer");
  };

  return (
    <Container>
      <ButtonList>
        <XO/>
        <StyledHeading>Who do you want to play with?</StyledHeading>
        <StyledButton
          startIcon={<PersonIcon />}
          selected={selectedButton === 1}
          onClick={() => handleButtonClick(1)}
          variant="contained"
        >
          Vs Player
        </StyledButton>
        <StyledButton
          startIcon={<ComputerIcon />}
          selected={selectedButton === 2}
          onClick={() => handleButtonClick(2)}
          variant="contained"
        >
          Vs Computer
        </StyledButton>
      </ButtonList>
      {selectedButton && <Card selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>}
    </Container>
  );
};

export default Menu;
