import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const InputBasicStyle = styled.input`
  background-color: #ecebf1;
  color: #04c09e;
  height: 45px;
  width: ${(props) => props.width || '100%'};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 18px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export const InputBasic = forwardRef(
  ({ type, placeholder, value, onChange, width }, ref) => {
    return (
      <InputBasicStyle
        width={width}
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);
