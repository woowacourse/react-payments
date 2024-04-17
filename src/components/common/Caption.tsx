import { CSSProperties } from "react";

import styled from "styled-components";

type Caption = "input" | "error";

type CaptionColor = {
  [key in Caption]: CSSProperties["color"];
};

interface CaptionProps {
  text: string;
  type: Caption;
}

const captionColor: CaptionColor = {
  input: "#8B95A1",
  error: "#FF3D3D",
};

const Caption = ({ text, type }: CaptionProps) => {
  return <StyledCaption color={captionColor[type]}>{text}</StyledCaption>;
};

export default Caption;

const StyledCaption = styled.span<{
  color: CSSProperties["color"];
}>`
  color: ${({ color }) => color};
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;
