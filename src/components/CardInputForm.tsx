import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { CardInput, Button } from "./index";
import { CardType } from "../types";
import { QuestionMark } from "../assets";
import { PASSWORD_DIGIT_INDEX } from "../constants";
import {
  getIsCardvalid,
  getSeperatedCardNumber,
  getSeperatedExpiredDate,
  getSubCardNumber,
  getSubExpiredDate,
  validateCardNumber,
  validateCvc,
  validateExpiredDate,
  validateOwnerName,
  validatePassword,
} from "../utils";

interface CardInputFormType {
  card: CardType;
  setNewCard: (key: keyof CardType, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = ({ card, setNewCard, onSubmit }: CardInputFormType) => {
  const [password, setPassword] = useState(["", ""]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    getIsCardvalid(card) ? setIsValidForm(true) : setIsValidForm(false);
  }, [card]);

  const handleInputChanged =
    (key: keyof Omit<CardType, "password">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (key) {
        case "cardNumber":
          e.target.value = getSeperatedCardNumber(e.target.value);
          break;
        case "expiredDate":
          e.target.value = getSeperatedExpiredDate(e.target.value);
          break;
        case "ownerName":
          e.target.value = e.target.value.toLocaleUpperCase();
      }
      setNewCard(key, e.target.value);
    };

  const handleInputKeyDown =
    (key: keyof Omit<CardType, "password">) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement) || e.key !== "Backspace")
        return;

      const value = e.target.value;
      e.target.value = "";
      e.target.value = value;

      switch (key) {
        case "cardNumber":
          e.target.value = getSubCardNumber(e.target.value);
          break;
        case "expiredDate":
          e.target.value = getSubExpiredDate(e.target.value);
      }
      setNewCard(key, e.target.value);
    };

  const handlePasswordChanged =
    (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      password[digit] = e.target.value;
      setPassword(password);
      setNewCard("password", password.join(""));
    };

  return (
    <CardInputFormWrapper onSubmit={onSubmit}>
      <InputSetWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          value={card.cardNumber}
          placeholder="카드 번호를 입력해 주세요."
          width="318px"
          isAutoFocus
          isRequired
          maxLength={25}
          onChange={handleInputChanged("cardNumber")}
          onKeyDown={handleInputKeyDown("cardNumber")}
        />
        {<span>{card.cardNumber && validateCardNumber(card.cardNumber)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput
          value={card.expiredDate}
          placeholder="MM / YY"
          width="137px"
          isRequired
          maxLength={7}
          onChange={handleInputChanged("expiredDate")}
          onKeyDown={handleInputKeyDown("expiredDate")}
        />
        {
          <span>
            {card.expiredDate && validateExpiredDate(card.expiredDate)}
          </span>
        }
      </InputSetWrapper>

      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
          <span>{card.ownerName.length}/14</span>
        </OwnerNameLabelWrapper>
        <CardInput
          value={card.ownerName}
          width="318px"
          maxLength={14}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleInputChanged("ownerName")}
        />
        {<span>{card.ownerName && validateOwnerName(card.ownerName)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            value={card.cvc}
            width="84px"
            isSecured
            isRequired
            maxLength={3}
            onChange={handleInputChanged("cvc")}
          />
          <img
            src={QuestionMark}
            alt="도움말"
            onClick={() => setIsAnswered(!isAnswered)}
          />
        </CvcInputWrapper>
        {<span>{card.cvc && validateCvc(card.cvc)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id="password1"
            value={password[PASSWORD_DIGIT_INDEX.FIRST]}
            width="42px"
            maxLength={1}
            isSecured
            isRequired
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id="password2"
            width="42px"
            value={password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured
            isRequired
            maxLength={1}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
        </PasswordInputWrapper>
        {<span>{card.password && validatePassword(card.password)}</span>}
      </InputSetWrapper>
      {isAnswered && (
        <AnswerBoxWrapper>
          <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요 😊</p>
        </AnswerBoxWrapper>
      )}
      <Button isShown={isValidForm} type="submit">
        다음
      </Button>
    </CardInputFormWrapper>
  );
};

const CardInputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;
`;

const InputSetWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 8px;

  & > label {
    font-weight: 500;
    font-size: 12px;
    color: #525252;
    margin-bottom: 6px;
  }

  & > span {
    margin: 5px 2px;
    font-size: 10px;
    color: red;
  }
`;

const OwnerNameLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > label {
    font-weight: 500;
    font-size: 12px;
    color: #525252;

    margin-bottom: 6px;
  }

  & > span {
    color: black;
    font-size: 12px;
  }
`;

const CvcInputWrapper = styled.div`
  display: flex;

  & > img {
    width: 27px;
    height: 27px;

    margin: 8px 0 0 10px;

    cursor: pointer;
  }
`;

const PasswordInputWrapper = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 5px;
  }

  & > :nth-child(2) {
    margin-right: 7px;
  }
`;

const SecuredPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 48px;

  font-size: 12px;
`;

const AnswerBoxWrapper = styled.div`
  display: flex;
  width: 180px;
  height: 6%;

  position: absolute;
  top: 520px;
  right: 75px;

  padding: 10px;

  background: #ecebf1;
  border-radius: 8px;

  & > p {
    align-self: center;
    font-size: 13px;
    color: #636c72;
  }
`;

export default CardInputForm;
