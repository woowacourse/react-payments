import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import CardInput from "./CardInput";
import {
  PASSWORD_DIGIT_INDEX,
  ROUTER_PATH,
  SEPERATED_CARD_NUMBER_LENGTH,
} from "../constants";
import { CardType } from "../types";
import { Link } from "react-router-dom";
import { QuestionMark } from "../assets";

interface CardInputFormType {
  card: CardType;
  setCard: (value: CardType) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = (props: CardInputFormType) => {
  const card = JSON.parse(JSON.stringify(props.card));
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleCardNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > SEPERATED_CARD_NUMBER_LENGTH.SECOND
      ? (card.cardNumber =
          e.target.value.substring(0, 12) +
          e.target.value
            .substring(12, e.target.value.length)
            .replace(/[0-9]/g, "•"))
      : (card.cardNumber = e.target.value);
    if (
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD
    ) {
      card.cardNumber = card.cardNumber + " - ";
    }
    props.setCard(card);
  };

  const handleCardNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return;

    if (card.cardNumber.length === 7)
      card.cardNumber = card.cardNumber.substring(
        0,
        SEPERATED_CARD_NUMBER_LENGTH.FIRST
      );
    if (card.cardNumber.length === 14)
      card.cardNumber = card.cardNumber.substring(
        0,
        SEPERATED_CARD_NUMBER_LENGTH.SECOND
      );
    if (card.cardNumber.length === 21)
      card.cardNumber = card.cardNumber.substring(
        0,
        SEPERATED_CARD_NUMBER_LENGTH.THIRD
      );

    props.setCard(card);
  };

  const handleExpiredDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.expiredDate = e.target.value;
    props.setCard(card);
    if (e.target.value.length === 2) {
      card.expiredDate = card.expiredDate + " / ";
      props.setCard(card);
    }
  };

  const handleExpiredDateKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (card.expiredDate.length === 5) {
        card.expiredDate = card.expiredDate.substring(0, 2);
        props.setCard(card);
      }
    }
  };

  const handlePasswordChanged =
    (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = [...card.password];
      newPassword[digit] = e.target.value;
      card.password = newPassword;
      props.setCard(card);
    };

  const handleOwnerNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.ownerName = e.target.value.toLocaleUpperCase();
    props.setCard(card);
  };

  const handleCvcChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.cvc = e.target.value;
    props.setCard(card);
  };

  return (
    <CardInputFormWrapper>
      <InputSetWrapper>
        <label htmlFor="cardNumber">카드 번호</label>
        <CardInput
          id="cardNumber"
          value={card.cardNumber}
          placeholder="카드 번호를 입력해 주세요."
          width="318px"
          isAutoFocus={true}
          isRequired={true}
          onChange={handleCardNumberChanged}
          onKeyDown={handleCardNumberKey}
        />
        {!card.cardNumber.match(/[0-9]/g) && card.cardNumber.length !== 0 && (
          <span>숫자만 입력해주세요.</span>
        )}
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="expiredDate">만료일</label>
        <CardInput
          id="expiredDate"
          value={card.expiredDate}
          placeholder="MM / YY"
          width="137px"
          isRequired={true}
          onChange={handleExpiredDateChanged}
          onKeyDown={handleExpiredDateKey}
        />
      </InputSetWrapper>

      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor="ownerName">카드 소유자 이름 (선택)</label>
          <span>{card.ownerName.length}/30</span>
        </OwnerNameLabelWrapper>
        <CardInput
          id="ownerName"
          value={card.ownerName}
          width="318px"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={handleOwnerNameChanged}
        />
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            id="cvc"
            value={card.cvc}
            width="84px"
            isSecured={true}
            isRequired={true}
            onChange={handleCvcChanged}
          />
          <img
            src={QuestionMark}
            alt="도움말"
            onClick={() => setIsAnswered(!isAnswered)}
          />
        </CvcInputWrapper>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor="password">카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id="password"
            value={card.password[PASSWORD_DIGIT_INDEX.FIRST]}
            width="42px"
            isSecured={true}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id="password"
            width="42px"
            value={card.password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured={true}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
          <SecuredPasswordWrapper>●</SecuredPasswordWrapper>
        </PasswordInputWrapper>
      </InputSetWrapper>
      {isAnswered && (
        <AnswerBoxWrapper>
          <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요 😊</p>
        </AnswerBoxWrapper>
      )}
      <NextLink type="submit" onClick={props.onSubmit} to={ROUTER_PATH.MyCard}>
        다음
      </NextLink>
    </CardInputFormWrapper>
  );
};

const NextLink = styled(Link)`
  width: 30px;
  align-self: flex-end;

  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  color: black;

  :active {
    opacity: 50%;
    transform: scale(0.98);
  }
`;

const CardInputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;
`;

const InputSetWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 13px;

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
    margin: 8px 0 0 10px;
    width: 27px;
    height: 27px;
    cursor: pointer;
    :hover {
    }
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
  padding: 10px;

  position: absolute;
  top: 520px;
  right: 75px;

  width: 180px;
  height: 6%;

  background: #ecebf1;
  border-radius: 8px;

  & > p {
    align-self: center;
    font-size: 13px;
    color: #636c72;
  }
`;

export default CardInputForm;
