import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";

interface TipButtonComponent {
  onClick?: () => void;
  contents: string;
  color?: string;
}

export const TipButton = ({ onClick, contents, color }: TipButtonComponent) => {
  return (
    <TipButtonContainerStyle onClick={onClick} color={color}>
      <div>{contents}</div>
    </TipButtonContainerStyle>
  );
};

const TipButtonContainerStyle = styled.div<{ color: string }>`
  border-radius: 50%;
  border: 1px solid ${(props) => props.color || COLORS.GRAY_100};
  color: ${(props) => props.color || COLORS.GRAY_100};
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
