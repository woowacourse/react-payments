import React from "react";

import styled from "styled-components";

const TipButtonContainerStyle = styled.div`
  border-radius: 50%;
  border: 1px solid #bababa;
  color: ${props.color || "#bababa"};
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TipButton = ({ onClick, contents, color }) => {
  return (
    <TipButtonContainerStyle onClick={onClick}>
      <div>{contents}</div>
    </TipButtonContainerStyle>
  );
};
