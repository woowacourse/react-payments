import { CSSProperties } from "react";
import styled from "styled-components";

type Text = "caption" | "error";

type TextColor = {
  [key in Text]: CSSProperties["color"];
};

interface InfoTextProps {
  text: string;
  textType: Text;
}

const TEXT_COLOR: TextColor = {
  caption: "#8B95A1",
  error: "#FF3D3D",
};

const InfoText = ({ text, textType }: InfoTextProps) => {
  const textColor = TEXT_COLOR[textType];

  return <StyledInfoText color={textColor}>{text}</StyledInfoText>;
};

export default InfoText;

const StyledInfoText = styled.span<{
  color: CSSProperties["color"];
}>`
  height: 14px;
  line-height: 14px;

  margin-top: 4px;

  color: ${({ color }) => color};
  font-size: 10px;
  font-weight: 400;
`;
