/** @jsxImportSource @emotion/react */
import React from "react";
import { tooltipStyle } from "./emotionCss";

interface Props {
  children: React.ReactNode;
}

const Tooltip = ({ children }: Props) => {
  return <div css={tooltipStyle}>{children}</div>;
};

export default Tooltip;
