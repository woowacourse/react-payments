import { css } from "@emotion/react";

type TextProps = {
  text: string;
  size?: string;
  color?: string;
  weight?: number | string;
  lineHeight?: string;
};

const Text = ({ text, size = "14px", color = "#000", weight = 400, lineHeight = "normal" }: TextProps) => {
  return <span css={textStyle({ size, color, weight, lineHeight })}>{text}</span>;
};

export default Text;

const textStyle = ({
  size,
  color,
  weight,
  lineHeight,
}: {
  size: string;
  color: string;
  weight: number | string;
  lineHeight: string;
}) => css`
  font-size: ${size};
  color: ${color};
  font-weight: ${weight};
  line-height: ${lineHeight};
  font-style: normal;
`;
