import { css } from "@emotion/react";

export const inputStyle = (isError: boolean, width = "70px") => css`
  width: ${width};
  height: 32px;
  border-radius: 2px;
  border: 1.01px solid ${isError ? "#ff3d3d" : "#ACACAC"};
  padding: 8px;
  box-sizing: border-box;
`;