/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const tooltipStyle = css({
  color: "#D1180B",
  marginTop: "10px",
  fontSize: "0.8rem",
});

const Tooltip = ({ children }: Props) => {
  return <div css={tooltipStyle}>{children}</div>;
};

export default Tooltip;
