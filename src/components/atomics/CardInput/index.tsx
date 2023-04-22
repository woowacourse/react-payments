import React from 'react';

import styled, { css } from 'styled-components';

/* type */
interface CardInputStyleProps {
  type: 'text' | 'password' | 'number';
  size?: string;
  placeholder?: string;
  width: string;
  minLength?: number;
  maxLength: number;
  center: boolean;
}

/* component */
const CardInput: React.FC<CardInputStyleProps> = ({ ...rest }) => {
  return <StyledCardInput {...rest} />;
};

/* styles */
const StyledCardInput = styled.input.attrs((props) => ({
  type: props.type,
  size: props.size || '1em',
  minLength: props.minLength || 0,
  maxLength: props.maxLength,
}))`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

  width: ${(props) => props.width};
  padding: ${(props) => props.size};
  background-color: #ecebf1;

  &:invalid {
    border-color: red;
  }

  &::placeholder {
    color: #737373;
  }

  ${(props) => {
    return (
      props.center &&
      css`
        text-align: center;
      `
    );
  }}
`;

export default CardInput;
