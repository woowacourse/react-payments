import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

function TextButton({ children: text, hexColor }) {
  return <Button color={hexColor}>{text}</Button>;
}

export default TextButton;
