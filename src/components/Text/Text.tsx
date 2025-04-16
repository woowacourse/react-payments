/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type TextType = "title" | "description" | "label" | "error";
type textProps = { type: TextType; text: string };

const Text = ({ type, text }: textProps) => {
  const matchType = {
    title: titleStyle,
    description: descriptionStyle,
    label: labelStyle,
    error: errorStyle,
  };

  return <span css={matchType[type]}>{text}</span>;
};

export default Text;

const titleStyle = css`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const descriptionStyle = css`
  color: #8b95a1;
  font-size: 9.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const labelStyle = css`
  font-size: 12px;
  color: #0a0d13;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

const errorStyle = css`
  color: #ff3d3d;
  font-size: 9.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
