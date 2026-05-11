import { css, keyframes } from '@emotion/react';

export default function CheckIcon() {
  return (
    <div css={ellipseStyle}>
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          css={checkPathStyle}
          d="M3.75 9.78774L15.7971 23.75L35.75 3.75"
          stroke="white"
          strokeWidth="7.49999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const drawCheck = keyframes`
  from {
    stroke-dashoffset: 50;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const checkPathStyle = css`
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: ${drawCheck} 0.4s ease forwards;
`;

const ellipseStyle = css`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--color-button-primary-background);
  display: flex;
  align-items: center;
  justify-content: center;
`;
