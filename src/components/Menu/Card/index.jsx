import React from "react";
import VsPlayerContainer from "./VsPlayerContainer";
import VsComputerContainer from "./VsComputerContainer";
import { Content } from "./styles";

const Card = ({ selectedButton }) => {
  return (
    <Content>
      {selectedButton === 1 ? <VsPlayerContainer /> : <VsComputerContainer />}
    </Content>
  );
};

export default Card;
