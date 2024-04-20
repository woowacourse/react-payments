import { css } from '@emotion/react';

const errorMessageStyle = css({
  fontSize: '9.5px',
  color: '#ff3d3d',
});

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

export default ErrorMessage;
