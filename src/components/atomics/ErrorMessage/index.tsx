import React from 'react';

import styled from 'styled-components';
import { InputFontStyle } from '../../stylesheet/font';

/* types */
interface ErrorMessageStyleProps {
  isError: boolean;
}

interface ErrorMessageProps extends ErrorMessageStyleProps {
  children: React.ReactNode;
}

/* component */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, ...rest }) => {
  return <StyledErrorMessage {...rest}>{children}</StyledErrorMessage>;
};

/* styles */
const StyledErrorMessage = styled.span<ErrorMessageProps>`
  ${InputFontStyle}

  display: ${(props) => (props.isError ? 'inline' : 'none')};
  color: red;
`;

export default ErrorMessage;
