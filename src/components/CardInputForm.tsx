import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import CardInput from "./CardInput";

const CardInputForm = () => {
  const [cardNumber, setCardNumber] = useState<number>();
  const [expiredDate, setExpiredDate] = useState<number>();
  const [ownerName, setOwnerName] = useState<string>();
  const [cvc, setCvc] = useState<number>();
  const [password, setPassword] = useState<number>();

  useEffect(() => {}, []);

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardNumber(Number(value));
  };

  console.log(cardNumber);

  return (
    <CardInputFormWrapper>
      <CardInputWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          type="cardNumber"
          onChange={changeCardNumber}
          value={cardNumber}
        />
        {/* <span>잘못됨</span> */}
      </CardInputWrapper>

      {/*       
      <CardInputWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput type="expiredDate" />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
        <CardInput type="ownerName" />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CardInput type="cvc" />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput type="password" />
          <CardInput type="password" />
        </PasswordInputWrapper>
      </CardInputWrapper> */}
    </CardInputFormWrapper>
  );
};

const CardInputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;
`;

const CardInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-weight: 500;
    font-size: 12px;
    color: #525252;
    margin-bottom: 6px;
  }

  & > span {
    color: red;
  }
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  width: 103px;
  justify-content: space-between;
`;

export default CardInputForm;
