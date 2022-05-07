import React from 'react';
import styled from 'styled-components';

const ErrorMessageCotainer = styled.span`
  width: 100%;
  padding: 8px 8px 8px 0;
  color: #f00;
  font-size: 1rem;
  font-weight: 300;
  min-height: 25px;
`;

const S = {
  ErrorMessageCotainer,
};

function ErrorMessage({ children }) {
  return <S.ErrorMessageCotainer>{children}</S.ErrorMessageCotainer>;
}

export default ErrorMessage;
