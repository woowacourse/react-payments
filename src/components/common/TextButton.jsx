import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  visibility: ${props => (props.isVisible ? 'viisble' : 'hidden')};
  color: ${props => props.hexColor};
  font-size: 1rem;
  padding: 8px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    color: ${props => `${props.hexColor}90`};
  }
`;

function TextButton({ children: text, ...rest }) {
  return <Button {...rest}>{text}</Button>;
}

export default TextButton;
