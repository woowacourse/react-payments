import React from "react";
import styled from "styled-components";

interface CardInputProps {
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

const CardInput = (props: CardInputProps) => {
  return (
    <CardInputWrapper
      id={props.id}
      placeholder={props.placeholder}
      style={{
        width: props.width,
        marginRight: `${props.isSecured && "6px"}`,
      }}
      value={props.value}
      type={props.isSecured ? "password" : "text"}
      autoFocus={props.isAutoFocus}
      required={props.isRequired}
      maxLength={props.maxLength}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

const CardInputWrapper = styled.input`
  width: 318px;
  height: 45px;

  padding: 0 10px;
  margin-bottom: 20px;

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
