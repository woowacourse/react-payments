import React, { ChangeEvent, Dispatch } from "react";
import styled from "styled-components";

interface CardInputType {
  type: "cardNumber" | "expiredDate" | "ownerName" | "cvc" | "password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | undefined;
}

const CardInput = (props: CardInputType) => {
  switch (props.type) {
    case "cardNumber":
      return (
        <InputWrapper
          id={props.type}
          placeholder="카드 번호를 입력해주세요."
          autoFocus
          required
          value={props.value}
          onChange={props.onChange}
        />
      );
    case "expiredDate":
      return (
        <InputWrapper
          id={props.type}
          placeholder="MM / YY"
          style={{ width: "137px" }}
          required
        />
      );
    case "ownerName":
      return (
        <InputWrapper
          id={props.type}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      );
    case "cvc":
      return (
        <InputWrapper
          id={props.type}
          type="password"
          style={{ width: "84px" }}
          required
        />
      );
    case "password":
      return (
        <InputWrapper
          id={props.type}
          type="password"
          style={{ width: "37px" }}
          required
        />
      );
  }
};

const InputWrapper = styled.input`
  width: 318px;
  height: 45px;

  padding-left: 10px;
  text-align: center;
  background: #ecebf1;
  border-radius: 7px;

  font-size: 15px;
  color: black;
  border: none;

  margin-bottom: 20px;

  &:focus {
    outline-color: #525252;
  }
`;

export default CardInput;
