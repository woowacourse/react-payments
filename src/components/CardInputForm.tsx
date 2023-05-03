import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CardInput, Button } from "./index";
import { CardType } from "../types";
import { QuestionMark } from "../assets";
import {
  CARD_COMPANY_NOT_SELECTED_STRING,
  CARD_INPUT_LENGTH,
  PASSWORD_DIGIT_INDEX,
} from "../constants";
import {
  getSeperatedCardNumber,
  getSeperatedExpiredDate,
  getSubCardNumber,
  getSubExpiredDate,
  validateExpiredDate,
  validateNumber,
  validateOwnerName,
} from "../utils";

interface CardInputFormType {
  card: CardType;
  setNewCard: (key: keyof Omit<CardType, "password">, value: string) => void;
  setPassword: (value: string[]) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = ({
  card,
  setNewCard,
  setPassword,
  onSubmit,
}: CardInputFormType) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    card.cardNumber.length === CARD_INPUT_LENGTH.cardNumber &&
    card.expiredDate.length === CARD_INPUT_LENGTH.expiredDate &&
    // card.password.join("").length === CARD_INPUT_LENGTH.password1 * 2 &&
    card.cardCompany !== CARD_COMPANY_NOT_SELECTED_STRING
      ? setIsValidForm(true)
      : setIsValidForm(false);
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
      // const newPassword = [...card.password];
      // newPassword[digit] = e.target.value;
      // setPassword(newPassword);
      // if (e.target.nextSibling instanceof HTMLInputElement)
      //   e.target.nextSibling.focus();
      // moveFocus();
    };

  return (
    <CardInputFormWrapper ref={formRef} onSubmit={onSubmit}>
      <InputSetWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          value={card.cardNumber}
          placeholder="카드 번호를 입력해 주세요."
          width="318px"
          isAutoFocus
          isRequired
          onChange={handleInputChanged("cardNumber")}
          onKeyDown={handleInputKeyDown("cardNumber")}
        />
        {<span>{validateNumber(card.cardNumber)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput
          value={card.expiredDate}
          placeholder="MM / YY"
          width="137px"
          isRequired
          onChange={handleInputChanged("expiredDate")}
          onKeyDown={handleInputKeyDown("expiredDate")}
        />
        {<span>{validateExpiredDate(card.expiredDate)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
          <span>{card.ownerName.length}/30</span>
        </OwnerNameLabelWrapper>
        <CardInput
          value={card.ownerName}
          width="318px"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleInputChanged("ownerName")}
        />
        {<span>{validateOwnerName(card.ownerName)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            value={card.cvc}
            width="84px"
            isSecured
            isRequired
            onChange={handleInputChanged("cvc")}
          />
          <img
            src={QuestionMark}
            alt="도움말"
            onClick={() => setIsAnswered(!isAnswered)}
          />
        </CvcInputWrapper>
        {/* {<span>{validateNumber(card.cvc)}</span>} */}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id="password1"
            // value={card.password[PASSWORD_DIGIT_INDEX.FIRST]}
            width="42px"
            isSecured
            isRequired
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id="password2"
            width="42px"
            // value={card.password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured
            isRequired
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
        </PasswordInputWrapper>
        {/* {<span>{validateNumber(card.password.join(""))}</span>} */}
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
