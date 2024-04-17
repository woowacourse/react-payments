import { css } from '@emotion/react';

interface ErrorMessageType {
  value: string;
}

function ErrorMessage({ value }: ErrorMessageType) {
  return (
    <>
      <p css={errorMessageStyle}>{value}</p>
    </>
  );
}

const errorMessageStyle = css`
  font-size: 9.5px;
  color: #ff3d3d;
`;

export default ErrorMessage;
