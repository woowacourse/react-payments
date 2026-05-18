import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CardListLoading = () => {
  return (
    <div css={containerStyle}>
      <div css={spinnerStyle} />
    </div>
  );
};

export default CardListLoading;

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const spinnerStyle = css`
  width: 36px;
  height: 36px;
  border: 4px solid #e0e0e0;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
