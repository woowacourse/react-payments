import React from 'react';
import styled, { css } from 'styled-components';

const StyledTextBox = styled.p`
  font-size: ${(props) => props.fontSize || '3px'};
  color: ${(props) => props.color || 'black'};
  text-align: 'center';
`;

const TextBox = ({ children, fontSize, color }) => {
  return (
    <StyledTextBox fontSize={`${fontSize}px`} color={color}>
      {children}
    </StyledTextBox>
  );
};

export default TextBox;
