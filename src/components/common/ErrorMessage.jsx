import React from 'react';
import styled from 'styled-components';

const ErrorMessageCotainer = styled.span`
  width: 100%;
  padding: 8px;
  color: #f00;
  font-size: 4px;
  font-weight: 300;
`;

function ErrorMessage({ children }) {
  return <ErrorMessageCotainer>{children}</ErrorMessageCotainer>;
}

export default ErrorMessage;
