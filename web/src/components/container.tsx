import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;

  @media (--media-min-small) {
    padding: 2em;
  }
`;

export const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
