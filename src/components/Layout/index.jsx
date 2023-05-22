import React from "react";
import { StyledLayout, StyledTitle } from "./styles";
import { StyledContainer } from "./styles";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledTitle variant="h1">XO Game</StyledTitle>
      <StyledContainer>{children}</StyledContainer>
    </StyledLayout>
  );
};

export default Layout;
