import React from 'react';

import styled, { css } from 'styled-components';

/* types */
interface MessageStyleProps {
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  opacity?: number;
  letterSpacing?: string;
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
  color: #000;
  line-height: 1.2;
  font-weight: 400;
  font-size: 16px;

  ${(props) => {
    return css`
      font-weight: ${props.fontWeight};
      font-size: ${props.fontSize};
      line-height: ${props.lineHeight};
      color: ${props.color};
      opacity: ${props.opacity};
      letter-spacing: ${props.letterSpacing};
    `;
  }}
`;

export default Message;
