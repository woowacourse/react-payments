import { css, keyframes } from '@emotion/react';

export default function ExclamationIcon() {
  return (
    <div css={ellipseStyle}>
      <svg css={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="32" height="32" fill="white">
        <path d="M320 496C342.1 496 360 513.9 360 536C360 558.1 342.1 576 320 576C297.9 576 280 558.1 280 536C280 513.9 297.9 496 320 496zM320 64C346.5 64 368 85.5 368 112C368 112.6 368 113.1 368 113.7L352 417.7C351.1 434.7 337 448 320 448C303 448 289 434.7 288 417.7L272 113.7C272 113.1 272 112.6 272 112C272 85.5 293.5 64 320 64z" />
      </svg>
    </div>
  );
}

const bounceIn = keyframes`
  0% { transform: scale(0); }
  60% { transform: scale(1.2); }
  80% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const ellipseStyle = css`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const svgStyle = css`
  animation: ${bounceIn} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;
