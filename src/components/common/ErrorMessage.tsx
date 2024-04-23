import { css } from '@emotion/react';
import { ErrorCardType } from '../../types/cardType';

interface ErrorMessageType {
  error: ErrorCardType;
}

function ErrorMessage({ error }: ErrorMessageType) {
  function findErrorMessage(errorObject: ErrorCardType) {
    const values = Object.values(errorObject);
    for (const value of values) {
      if (value) {
        return value;
      }
    }
  }

  return <p css={errorMessageStyle}>{findErrorMessage(error)}</p>;
}

const errorMessageStyle = css`
  font-size: 9.5px;
  color: #ff3d3d;
`;

export default ErrorMessage;
