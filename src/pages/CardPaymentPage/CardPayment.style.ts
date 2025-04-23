import { css } from '@emotion/react';

export const cardPaymentLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const cardPaymentContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

export const cardPaymentFormContainer = css`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

export const cardPaymentStepContainer = css`
  height: 20rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
