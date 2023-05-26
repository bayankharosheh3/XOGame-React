import React from "react";
import VsPlayerContainer from "./VsPlayerContainer";
import VsComputerContainer from "./VsComputerContainer";
import { Content } from "./styles";

const Card = ({ selectedButton,setSelectedButton }) => {
  return (
    <Content>
      {selectedButton === 1 ? <VsPlayerContainer setSelectedButton={setSelectedButton}/> : <VsComputerContainer setSelectedButton={setSelectedButton}/>}
    </Content>
  );
};

export default Card;
