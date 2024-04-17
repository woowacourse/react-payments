import { css } from '@emotion/react';

interface ErrorMessageType {
  value: string;
}

function ErrorMessage({ value }: ErrorMessageType) {
  return (
    <>
      <p>{value}</p>
    </>
  );
}

export default ErrorMessage;
