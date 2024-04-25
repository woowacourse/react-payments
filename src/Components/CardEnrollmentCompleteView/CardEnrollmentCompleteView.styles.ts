import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CheckLogo = styled.div`
  background: #000000;
  width: 76px;
  height: 76px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 32px;
    height: auto;
  }
`;

export const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100vh;
`;

export const textStyle = css`
  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`;
