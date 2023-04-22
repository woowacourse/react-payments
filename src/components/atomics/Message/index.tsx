import React from 'react';

import styled, { css } from 'styled-components';
import { HeaderFontStyle, InputFontStyle } from '../../stylesheet/font';

/* types */
interface MessageStyleProps {
  type: 'label' | 'header';
}

interface MessageProps extends MessageStyleProps {
  children: React.ReactNode;
}

/* component */
const Message: React.FC<MessageProps> = ({ children, ...rest }) => {
  return <StyledMessage {...rest}>{children}</StyledMessage>;
};

/* styles */
const StyledMessage = styled.span<MessageStyleProps>`
  ${(props) => {
    return (
      props.type === 'label' &&
      css`
        ${InputFontStyle}
      `
    );
  }}

  ${(props) => {
    return (
      props.type === 'header' &&
      css`
        ${HeaderFontStyle}
      `
    );
  }}
`;

export default Message;
