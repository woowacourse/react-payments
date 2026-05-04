import { css } from "@emotion/react";

export const inputStyle = (isError: boolean) => css`
  flex: 1;
  height: 32px;
  border-radius: 2px;
  min-width: 0;
  border: 1.01px solid ${isError ? "#ff3d3d" : "#ACACAC"};
  padding: 8px;
  box-sizing: border-box;
`;