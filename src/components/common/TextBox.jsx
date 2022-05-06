import React from 'react';
import styled from 'styled-components';

const StyledTextBox = styled.text`
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || 'black'};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`;

const TextBox = ({ children, fontSize, color }) => {
  return (
    <StyledTextBox
      fontSize={`${fontSize}px`}
      color={color}
      className="text-box"
    >
      {children}
    </StyledTextBox>
  );
};

export default TextBox;
