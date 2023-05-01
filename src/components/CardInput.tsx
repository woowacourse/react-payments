import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { INPUT_MAX_LENGTH, INPUT_MIN_LENGTH, CARD_ID_VALUE } from '../constants';

type CardIdType = (typeof CARD_ID_VALUE)[keyof typeof CARD_ID_VALUE];

interface CardInputProps extends HTMLAttributes<HTMLInputElement> {
  id: CardIdType;
  width?: string;
  value: number | string | undefined;
  isSecured: boolean;
  isAutoFocus: boolean;
  isRequired: boolean;
}

const CardInput = (props: CardInputProps) => {
  return (
    <CardInputWrapper
      id={props.id}
      placeholder={props.placeholder}
      style={{
        width: props.width,
        marginRight: `${props.isSecured && '6px'}`,
      }}
      value={props.value}
      type={props.isSecured ? 'password' : 'text'}
      autoFocus={props.isAutoFocus}
      required={props.isRequired}
      maxLength={INPUT_MAX_LENGTH[props.id]}
      minLength={INPUT_MIN_LENGTH[props.id]}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

const CardInputWrapper = styled.input`
  width: 318px;
  height: 45px;

  padding: 0 10px;

  text-align: center;
  background: #ecebf1;
  border-radius: 7px;

  font-size: 19px;
  color: black;
  border: none;

  &:focus {
    outline-color: #525252;
  }
  &::placeholder {
    font-size: 15px;
  }
`;

export default CardInput;
