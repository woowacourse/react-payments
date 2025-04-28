import { css } from '@emotion/react';

export const appLayout = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 430px;
  height: 750px;
  overflow: auto;
  border: 1px solid #E2E2E2;
`;

export const mainLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const cardLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 45px 0 45px 0;
`;
