import React, { useState } from "react";
import styled from "styled-components";
import { SEPERATED_CARD_NUMBER_LENGTH } from "../constants";
import CardInput from "./CardInput";

const CardInputForm = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiredDate, setExpiredDate] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [password, setPassword] = useState<string[]>(["", ""]);

  const handleCardNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 9
      ? setCardNumber(
          e.target.value.substring(0, 10) +
            e.target.value
              .substring(10, e.target.value.length)
              .replace(/[0-9]/g, "●")
        )
      : setCardNumber(e.target.value);
    if (
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD
    ) {
      setCardNumber((prev) => (prev += "-"));
    }
  };

  const handleCardNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (cardNumber.length === 5)
        setCardNumber(
          cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.FIRST)
        );
      if (cardNumber.length === 10)
        setCardNumber(
          cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.FIRST)
        );
      if (cardNumber.length === 15)
        setCardNumber(
          cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.FIRST)
        );
    }
  };

  const handleExpiredDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiredDate(e.target.value);
    if (e.target.value.length === 2) setExpiredDate((prev) => (prev += "/"));
  };

  const handleExpiredDateKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (expiredDate.length === 3) setExpiredDate(expiredDate.substring(0, 2));
    }
  };
  console.log(cardNumber);
  return (
    <CardInputFormWrapper>
      <CardInputWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          type="cardNumber"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleCardNumberChanged(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            handleCardNumberKey(e);
          }}
          value={cardNumber}
        />
        {/* <span>잘못됨</span> */}
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput
          type="expiredDate"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleExpiredDateChanged(e)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            handleExpiredDateKey(e);
          }}
          value={expiredDate}
        />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
        <CardInput
          type="ownerName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOwnerName(e.target.value)
          }
          value={ownerName}
        />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CardInput
          type="cvc"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCvc(e.target.value)
          }
          value={cvc}
        />
      </CardInputWrapper>

      <CardInputWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newPassword = [...password];
              newPassword[0] = e.target.value;
              setPassword(newPassword);
            }}
            value={password[0]}
          />
          <CardInput
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newPassword = [...password];
              newPassword[1] = e.target.value;
              setPassword(newPassword);
            }}
            value={password[1]}
          />
        </PasswordInputWrapper>
      </CardInputWrapper>
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
