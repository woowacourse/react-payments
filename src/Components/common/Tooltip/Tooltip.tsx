/** @jsxImportSource @emotion/react */
import React from "react";
import { tooltipStyle } from "./Tooltip.styles";

interface Props {
  children: React.ReactNode;
}

const Tooltip = ({ children }: Props) => {
  return <div css={tooltipStyle}>{children}</div>;
};

export default Tooltip;
