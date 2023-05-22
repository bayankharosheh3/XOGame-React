import React from 'react';
import { StyledLayout, StyledTitle } from './styles';

const Layout = ({children }) => {
  return (
    <StyledLayout>
      <StyledTitle variant="h1">XO Game</StyledTitle>
      {children}
    </StyledLayout>
  );
};

export default Layout;
