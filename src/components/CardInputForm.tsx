import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { CardInput, Button } from "./index";
import { CardType } from "../types";
import { QuestionMark } from "../assets";
import {
  CARD_INPUT_LENGTH,
  CARD_INPUT_REFS_INDEX,
  PASSWORD_DIGIT_INDEX,
} from "../constants";
import {
  validateCardInput,
  validateCardNumber,
  validateCvc,
  validateExpiredDate,
  validateOwnerName,
  validatePassword,
} from "../utils";
import { useCardInputRefs } from "../hooks";

export interface CardInputFormType {
  card: CardType;
  isValidCard: boolean;
  setNewCard: (key: keyof CardType, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = ({
  card,
  isValidCard,
  setNewCard,
  onSubmit,
}: CardInputFormType) => {
  const [password, setPassword] = useState(["", ""]);
  const [inputRefs, moveFocus] = useCardInputRefs();

  const handleInputChanged =
    (key: keyof Omit<CardType, "cardCompany" | "name">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        key !== "ownerName" &&
        validateCardInput(key, e.target.value) === ""
      ) {
        moveFocus(key);
      }
      setNewCard(key, e.target.value);
    };

  const handleInputKeyDown =
    (key: keyof CardType) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown" || e.key === "Enter") moveFocus(key);
      if (!(e.target instanceof HTMLInputElement) || e.key !== "Backspace")
        return;

      const value = e.target.value;
      e.target.value = "";
      e.target.value = value;

      setNewCard(key, e.target.value);
    };

  const handlePasswordChanged =
    (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      password[digit] = e.target.value;
      setPassword(password);
      setNewCard("password", password.join(""));

      if (digit === PASSWORD_DIGIT_INDEX.FIRST) {
        inputRefs[CARD_INPUT_REFS_INDEX.password2].current?.focus();
      }
    };

  const handlePasswordKeyDown =
    (digit: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (digit === PASSWORD_DIGIT_INDEX.SECOND && e.key === "ArrowLeft") {
        inputRefs[CARD_INPUT_REFS_INDEX.password1].current?.focus();
      }
    };

  return (
    <CardInputFormWrapper onSubmit={onSubmit}>
      <InputSetWrapper>
        <label htmlFor="cardNumber">
          카드 번호 <span>*</span>
        </label>
        <CardInput
          id="cardNumber"
          value={card.cardNumber}
          placeholder="카드 번호를 입력해 주세요."
          width="318px"
          isAutoFocus
          isRequired
          ref={inputRefs[CARD_INPUT_REFS_INDEX.cardNumber]}
          maxLength={CARD_INPUT_LENGTH.cardNumber}
          onChange={handleInputChanged("cardNumber")}
          onKeyDown={handleInputKeyDown("cardNumber")}
        />
        {<span>{card.cardNumber && validateCardNumber(card.cardNumber)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="expiredDate">
          만료일 <span>*</span>
        </label>
        <CardInput
          id="expiredDate"
          value={card.expiredDate}
          placeholder="MM / YY"
          width="137px"
          isRequired
          ref={inputRefs[CARD_INPUT_REFS_INDEX.expiredDate]}
          maxLength={CARD_INPUT_LENGTH.expiredDate}
          onChange={handleInputChanged("expiredDate")}
          onKeyDown={handleInputKeyDown("expiredDate")}
        />
        <span>{card.expiredDate && validateExpiredDate(card.expiredDate)}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
          <span>{card.ownerName.length}/14</span>
        </OwnerNameLabelWrapper>
        <CardInput
          id="ownerName"
          value={card.ownerName}
          width="318px"
          ref={inputRefs[CARD_INPUT_REFS_INDEX.ownerName]}
          maxLength={CARD_INPUT_LENGTH.ownerName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleInputChanged("ownerName")}
          onKeyDown={handleInputKeyDown("ownerName")}
        />
        {<span>{card.ownerName && validateOwnerName(card.ownerName)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="cvc">
          보안 코드(CVC/CVV) <span>*</span>
        </label>
        <CvcInputWrapper>
          <CardInput
            id="cvc"
            value={card.cvc}
            width="84px"
            type="password"
            isRequired
            ref={inputRefs[CARD_INPUT_REFS_INDEX.cvc]}
            maxLength={CARD_INPUT_LENGTH.cvc}
            onChange={handleInputChanged("cvc")}
            onKeyDown={handleInputKeyDown("cvc")}
          />
          <img src={QuestionMark} alt="도움말" />
          <AnswerBoxWrapper>
            <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요 😊</p>
          </AnswerBoxWrapper>
        </CvcInputWrapper>
        {<span>{card.cvc && validateCvc(card.cvc)}</span>}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="password">
          카드 비밀번호 <span>*</span>
        </label>
        <PasswordInputWrapper>
          <CardInput
            id="password"
            value={password[PASSWORD_DIGIT_INDEX.FIRST]}
            width="42px"
            type="password"
            isRequired
            ref={inputRefs[CARD_INPUT_REFS_INDEX.password1]}
            maxLength={CARD_INPUT_LENGTH.password}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
            onKeyDown={handlePasswordKeyDown(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            value={password[PASSWORD_DIGIT_INDEX.SECOND]}
            width="42px"
            type="password"
            isRequired
            ref={inputRefs[CARD_INPUT_REFS_INDEX.password2]}
            maxLength={CARD_INPUT_LENGTH.password}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
            onKeyDown={handlePasswordKeyDown(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
        </PasswordInputWrapper>
        {<span>{card.password && validatePassword(card.password)}</span>}
      </InputSetWrapper>
      <Button isShown={isValidCard} type="submit">
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
    & > span {
      color: red;
    }
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
  position: relative;

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
  ${CvcInputWrapper} > img:hover + & {
    display: flex;
  }
  display: none;
  width: 180px;
  height: 50px;

  position: absolute;
  top: -20px;
  left: 130px;

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
