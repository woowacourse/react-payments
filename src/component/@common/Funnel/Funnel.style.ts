import { css, keyframes } from '@emotion/react';

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const funnelComponentLayout = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1.6rem;
  animation: ${slideInUp} 0.5s ease-out forwards;
`;
