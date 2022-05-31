import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";

export const Dot = () => {
  return (
    <DotContainerStyle>
      <DotStyle />
    </DotContainerStyle>
  );
};

const DotContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 45px;
`;

const DotStyle = styled.div`
  border-radius: 50%;
  background-color: ${COLORS.GREEN_100};
  width: 4px;
  height: 4px;
`;
