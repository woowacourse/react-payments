import React from "react";
import styled from "styled-components";

const textColor = {
  error: "#d82424",
  complete: "#04c09e",
  default: "#525252",
};

const StyledWordCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 12px;
  line-height: 14px;
  color: ${({ state }) => textColor[state]};
  letter-spacing: -0.085em;
`;

const WordCounter = React.memo(({ currLength = "0", maxLength, state }) => {
  return (
    <StyledWordCounter state={state}>
      {currLength}/{maxLength}
    </StyledWordCounter>
  );
});

export default WordCounter;
