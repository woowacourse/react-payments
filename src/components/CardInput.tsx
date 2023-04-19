import React from "react";
import styled from "styled-components";
import { MAX_LENGTH_CARD_NUMBER } from "../constants";

interface CardInputType {
  type: "cardNumber" | "expiredDate" | "ownerName" | "cvc" | "password";
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CardInput = (props: CardInputType) => {
  switch (props.type) {
    case "cardNumber":
      return (
        <InputWrapper
          id={props.type}
          autoFocus
          required
          value={props.value}
          maxLength={MAX_LENGTH_CARD_NUMBER}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      );
    case "expiredDate":
      return (
        <InputWrapper
          id={props.type}
          placeholder="MM / YY"
          style={{ width: "137px" }}
          value={props.value}
          required
          maxLength={5}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      );
    case "ownerName":
      return (
        <InputWrapper
          id={props.type}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={props.value}
          maxLength={30}
          onChange={props.onChange}
        />
      );
    case "cvc":
      return (
        <InputWrapper
          id={props.type}
          type="password"
          style={{ width: "84px" }}
          required
          maxLength={3}
          value={props.value}
        />
      );
    case "password":
      return (
        <InputWrapper
          // id={props.type}
          type="password"
          style={{ width: "37px" }}
          required
          value={props.value}
          onChange={props.onChange}
          maxLength={1}
        />
      );
  }
};

const InputWrapper = styled.input`
  width: 318px;
  height: 45px;

  padding: 0 10px;
  text-align: center;
  background: #ecebf1;
  border-radius: 7px;

  font-size: 18px;
  color: black;
  border: none;

  margin-bottom: 20px;

  &:focus {
    outline-color: #525252;
  }
`;

export default CardInput;
