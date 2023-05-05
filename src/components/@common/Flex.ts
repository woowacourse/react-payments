import styled, { CSSProperties } from "styled-components";

interface FlexBoxProps {
  width?: CSSProperties["width"];
  flexDirection?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justify = "start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  width: ${({ width = "100%" }) => width};
`;

export default FlexBox;
