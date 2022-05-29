import React from "react";
import styled from "styled-components";

export const TipButton = ({ onClick, contents, color }) => {
  return (
    <TipButtonContainerStyle onClick={onClick} color={color}>
      <div>{contents}</div>
    </TipButtonContainerStyle>
  );
};

const TipButtonContainerStyle = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.color || "#bababa"};
  color: ${(props) => props.color || "#bababa"};
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
