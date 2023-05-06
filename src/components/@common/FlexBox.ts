import styled, { CSSProperties } from "styled-components";

interface FlexBoxProps {
  flexDirection?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justify = "center" }) => justify};
  align-items: ${({ align = "center" }) => align};
  gap: ${({ gap }) => gap};
  width: ${({ width = "100%" }) => width};
  height: ${({ height }) => height};
`;

export default FlexBox;
