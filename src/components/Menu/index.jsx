import React, { useState } from "react";
import {
  ButtonList,
  StyledButton,
  StyledHeading,
} from "./styles";
import Card from "./Card";
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <ButtonList>
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
      <Link to="/game">Start Menu</Link>
      {selectedButton && <Card selectedButton={selectedButton} />}
    </>
  );
};

export default Menu;
