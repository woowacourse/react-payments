import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CardInput, Button } from "./index";
import { CardType } from "../types";
import { QuestionMark } from "../assets";
import { useCard } from "../hooks";
import {
  CARD_COMPANY_NOT_SELECTED_STRING,
  CARD_INPUT_LENGTH,
  PASSWORD_DIGIT_INDEX,
  VALID_CARD_INPUT_FORM_LENGTH,
} from "../constants";
import {
  getReplacedCardNumber,
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
  setCard: (value: CardType) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = ({ card, setCard, onSubmit }: CardInputFormType) => {
  const [newCard, setNewCard] = useCard(
    JSON.parse(JSON.stringify(card)),
    setCard
  );
  const [isAnswered, setIsAnswered] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    newCard.cardNumber.length === CARD_INPUT_LENGTH.cardNumber &&
    newCard.expiredDate.length === CARD_INPUT_LENGTH.expiredDate &&
    newCard.password.join("").length === CARD_INPUT_LENGTH.password1 * 2 &&
    newCard.cardCompany !== CARD_COMPANY_NOT_SELECTED_STRING &&
    formRef.current?.offsetHeight === VALID_CARD_INPUT_FORM_LENGTH
      ? setIsValidForm(true)
      : setIsValidForm(false);
  }, [newCard]);

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "cardNumber":
        e.target.value = getSeperatedCardNumber(e.target.value);

        break;
      case "expiredDate":
        e.target.value = getSeperatedExpiredDate(e.target.value);
        break;
      case "ownerName":
        e.target.value = e.target.value.toLocaleUpperCase();
    }

    setNewCard(e.target.id, e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement) || e.key !== "Backspace")
      return;

    const value = e.target.value;
    e.target.value = "";
    e.target.value = value;

    switch (e.target.id) {
      case "cardNumber":
        e.target.value = getSubCardNumber(e.target.value);
        break;
      case "expiredDate":
        e.target.value = getSubExpiredDate(e.target.value);
    }

    setNewCard(e.target.id, e.target.value);
  };

  const handlePasswordChanged =
    (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = [...newCard.password];
      newPassword[digit] = e.target.value;
      setNewCard("password", newPassword);

      if (e.target.nextSibling instanceof HTMLInputElement)
        e.target.nextSibling.focus();
    };

  return (
    <CardInputFormWrapper ref={formRef} onSubmit={onSubmit}>
      <InputSetWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          id="cardNumber"
          value={newCard.cardNumber}
          placeholder="카드 번호를 입력해 주세요."
          width="318px"
          isAutoFocus
          isRequired
          onChange={handleInputChanged}
          onKeyDown={handleInputKeyDown}
        />
        {<span>{validateNumber(newCard.cardNumber)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput
          id="expiredDate"
          value={newCard.expiredDate}
          placeholder="MM / YY"
          width="137px"
          isRequired
          onChange={handleInputChanged}
          onKeyDown={handleInputKeyDown}
        />
        {<span>{validateExpiredDate(newCard.expiredDate)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
          <span>{newCard.ownerName.length}/30</span>
        </OwnerNameLabelWrapper>
        <CardInput
          id="ownerName"
          value={newCard.ownerName}
          width="318px"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleInputChanged}
        />
        {<span>{validateOwnerName(newCard.ownerName)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            id="cvc"
            value={newCard.cvc}
            width="84px"
            isSecured
            isRequired
            onChange={handleInputChanged}
          />
          <img
            src={QuestionMark}
            alt="도움말"
            onClick={() => setIsAnswered(!isAnswered)}
          />
        </CvcInputWrapper>
        {<span>{validateNumber(newCard.cvc)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id="password1"
            value={newCard.password[PASSWORD_DIGIT_INDEX.FIRST]}
            width="42px"
            isSecured
            isRequired
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id="password2"
            width="42px"
            value={newCard.password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured
            isRequired
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
        </PasswordInputWrapper>
        {<span>{validateNumber(newCard.password.join(""))}</span>}
      </InputSetWrapper>
      {isAnswered && (
        <AnswerBoxWrapper>
          <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요 😊</p>
        </AnswerBoxWrapper>
      )}
      <Button isShown={isValidForm} text="다음" type="submit" />
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
