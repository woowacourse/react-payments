import React from "react";
import styled from "styled-components";

interface CardInputType {
  id: "cardNumber" | "expiredDate" | "ownerName" | "cvc" | "password";
  placeholder?: string;
  width?: string;
  value: number | string | undefined;
  isSecured: boolean;
  isAutoFocus: boolean;
  isRequired: boolean;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CardInput = (props: CardInputType) => {
  return (
    <InputWrapper
      id={props.id}
      placeholder={props.placeholder}
      style={{ width: props.width }}
      value={props.value}
      autoFocus={props.isAutoFocus}
      required={props.isRequired}
      maxLength={props.maxLength}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

const InputWrapper = styled.input`
  width: 318px;
  height: 45px;

  padding: 0 10px;
  margin-bottom: 20px;

  text-align: center;
  background: #ecebf1;
  border-radius: 7px;

  font-size: 18px;
  color: black;
  border: none;

  &:focus {
    outline-color: #525252;
  }
`;

export default CardInput;
