import React, { CSSProperties } from "react";
import styled from "styled-components";

interface FlexProps {
  width?: CSSProperties["width"];
  dir?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ dir = "row" }) => dir};
  justify-content: ${({ justify = "start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  width: ${({ width = "100%" }) => width};
`;

export default Flex;
