import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface RegisterCardNameInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  isAutoFocus: boolean;
  isRequired: boolean;
}

const CardNameInput = (props: RegisterCardNameInputProps) => {
  return (
    <CardNameInputWrapper
      placeholder={props.placeholder}
      value={props.value}
      autoFocus={props.isAutoFocus}
      required={props.isRequired}
      onChange={props.onChange}
    />
  );
};

const CardNameInputWrapper = styled.input`
  width: 244px;
  height: 30px;

  font-size: 18px;
  color: #383838;

  font-weight: 400;
  text-align: center;
  border: none;
  border-bottom: 1.5px solid #737373;
`;

export default CardNameInput;
