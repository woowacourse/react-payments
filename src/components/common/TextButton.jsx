import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  visibility: ${props => (props.isVisible ? 'viisble' : 'hidden')};
  color: ${props => props.color};
  font-size: 1rem;
  padding: 8px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    color: ${props => `${props.color}90`};
  }
`;

const S = {
  Button,
};

function TextButton({ children: text, hexColor, isVisible, handleClick }) {
  return (
    <S.Button color={hexColor} isVisible={isVisible} onClick={handleClick}>
      {text}
    </S.Button>
  );
}

export default TextButton;
