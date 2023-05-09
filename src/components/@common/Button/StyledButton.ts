import styled, { CSSProperties } from "styled-components";

export interface StyledButtonProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bgColor?: CSSProperties["backgroundColor"];
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "50px" }) => height};
  background-color: ${({ bgColor = "transparent" }) => bgColor};
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export default StyledButton;
