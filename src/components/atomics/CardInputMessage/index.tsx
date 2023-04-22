import React from 'react';

import styled from 'styled-components';

/* types */
interface CardStyleProps {
  type: 'error' | 'title';
}

interface CardInputMessageProps extends CardStyleProps {
  children: React.ReactNode;
}

/* component */
const CardInputMessage: React.FC<CardInputMessageProps> = ({ children, ...rest }) => {
  return <StyledCardInputMessage {...rest}>{children}</StyledCardInputMessage>;
};

/* styles */
const StyledCardInputMessage = styled.span<CardStyleProps>`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => (props.type === 'error' ? 'red' : '#525252')};

  line-height: 14px;
`;

export default CardInputMessage;
