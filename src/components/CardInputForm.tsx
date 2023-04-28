import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import CardInput from './CardInput';
import {
  BACKSPASE_KEY,
  CARD_NUMBER_ERASE_SYMBOL,
  INPUT_WIDTH,
  PASSWORD_DIGIT_INDEX,
  SEPERATED_CARD_NUMBER_LENGTH,
  CARD_ID_VALUE,
  EXPIRED_DATE_PLUS_SYMBOL,
  EXPIRED_DATE_ERASE_SYMBOL,
  ERASE_UNTIL_CARD_NUMBER,
} from '../constants';
import { CardType } from '../types';
import { QuestionMark } from '../assets';
import {
  cardNumberValidation,
  cvcValidation,
  expiredDateValidation,
  inputFormValidation,
  ownerNameValidation,
  passwordValidation,
} from '../utils/validation';

interface CardInputFormProps {
  card: CardType;
  setCard: (value: CardType) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = (props: CardInputFormProps) => {
  const card = JSON.parse(JSON.stringify(props.card));
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [realCardNumber, setRealCardNumber] = useState<string>('');

  const handleCardNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealCardNumber(realCardNumber + e.target.value[e.target.value.length - 1].trim());

    cardNumberSecureMode(e);

    cardNumberPlusSymbol(e);
    props.setCard(card);
  };

  const cardNumberSecureMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > SEPERATED_CARD_NUMBER_LENGTH.SECOND
      ? (card.cardNumber =
          e.target.value.substring(
            SEPERATED_CARD_NUMBER_LENGTH.NUMBER_START,
            SEPERATED_CARD_NUMBER_LENGTH.SECURE_NUMBER_START
          ) +
          e.target.value
            .substring(SEPERATED_CARD_NUMBER_LENGTH.SECURE_NUMBER_START, e.target.value.length)
            .replace(/[0-9]/g, '•'))
      : (card.cardNumber = e.target.value);
  };

  const cardNumberPlusSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND ||
      e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD
    ) {
      card.cardNumber = card.cardNumber + ' - ';
    }
  };

  const handleCardNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === BACKSPASE_KEY) {
      if (card.cardNumber.length < CARD_NUMBER_ERASE_SYMBOL.FIRST)
        card.cardNumber = card.cardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.FIRST);
      if (card.cardNumber.length < CARD_NUMBER_ERASE_SYMBOL.SECOND)
        card.cardNumber = card.cardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.SECOND);
      if (card.cardNumber.length < CARD_NUMBER_ERASE_SYMBOL.THIRD)
        card.cardNumber = card.cardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.THIRD);
      if (card.cardNumber.length < CARD_NUMBER_ERASE_SYMBOL.FOURTH)
        card.cardNumber = card.cardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.FOURTH);

      realCardNumberKey();
    }
    props.setCard(card);
  };

  const realCardNumberKey = () => {
    if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_FOURTH)
      setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_FOURTH).trim());
    if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_THIRD)
      setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_THIRD).trim());
    if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_SECOND)
      setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_SECOND).trim());
    if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_FIRST)
      setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_FIRST).trim());
  };

  const handleExpiredDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.expiredDate = e.target.value;
    props.setCard(card);
    if (e.target.value.length === EXPIRED_DATE_PLUS_SYMBOL) {
      card.expiredDate = card.expiredDate + ' / ';
      props.setCard(card);
    }
  };

  const handleExpiredDateKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === BACKSPASE_KEY) {
      if (card.expiredDate.length <= EXPIRED_DATE_ERASE_SYMBOL.SEPARATE_FIRST) {
        card.expiredDate = card.expiredDate.substring(
          EXPIRED_DATE_ERASE_SYMBOL.FROM,
          EXPIRED_DATE_ERASE_SYMBOL.TO_FIRST
        );
      }
      if (card.expiredDate.length <= EXPIRED_DATE_ERASE_SYMBOL.SEPARATE_SECOND) {
        card.expiredDate = card.expiredDate.substring(
          EXPIRED_DATE_ERASE_SYMBOL.FROM,
          EXPIRED_DATE_ERASE_SYMBOL.TO_SECOND
        );
      }
    }
    props.setCard(card);
  };

  const handlePasswordChanged = (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = [...card.password];
    newPassword[digit] = e.target.value;
    card.password = newPassword;
    props.setCard(card);
  };

  const handleOwnerChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.ownerName = e.target.value.toLocaleUpperCase();
    props.setCard(card);
  };

  const handleCvcChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.cvc = e.target.value;
    props.setCard(card);
  };

  return (
    <CardInputFormWrapper onSubmit={props.onSubmit}>
      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.CARD_NUMBER}>카드 번호</label>
        <CardInput
          id={CARD_ID_VALUE.CARD_NUMBER}
          placeholder="카드 번호를 입력해 주세요."
          value={card.cardNumber}
          isSecured={false}
          isAutoFocus={true}
          isRequired={true}
          onChange={handleCardNumberChanged}
          onKeyDown={handleCardNumberKey}
        />
        <span>{cardNumberValidation(realCardNumber) ? '' : '카드 번호에는 숫자만 입력 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.EXPIRED_DATE}>만료일</label>
        <CardInput
          id={CARD_ID_VALUE.EXPIRED_DATE}
          placeholder="MM / YY"
          width={INPUT_WIDTH.EXPIRED_DATE}
          value={card.expiredDate}
          isSecured={false}
          isAutoFocus={false}
          isRequired={true}
          onChange={handleExpiredDateChanged}
          onKeyDown={handleExpiredDateKey}
        />
        <span>{expiredDateValidation(card.expiredDate) ? '' : '유효하지 않은 입력(월/연)입니다.'}</span>
      </InputSetWrapper>
      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor={CARD_ID_VALUE.OWNER_NAME}>카드 소유자 이름 (선택)</label>
          <span>{card.ownerName.length}/30</span>
        </OwnerNameLabelWrapper>

        <CardInput
          id={CARD_ID_VALUE.OWNER_NAME}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={card.ownerName}
          isSecured={false}
          isAutoFocus={false}
          isRequired={false}
          onChange={handleOwnerChanged}
        />
        <span>{ownerNameValidation(card.ownerName) ? '' : '카드 소유자 이름은 영어만 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.CVC}>보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            id={CARD_ID_VALUE.CVC}
            width={INPUT_WIDTH.CVC}
            value={card.cvc}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handleCvcChanged}
          />
          <img src={QuestionMark} alt="도움말" onClick={() => setIsAnswered(!isAnswered)} />
          {isAnswered && (
            <AnswerBoxWrapper>
              <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요.</p>
            </AnswerBoxWrapper>
          )}
        </CvcInputWrapper>
        <span>{cvcValidation(card.cvc) ? '' : 'cvc는 번호만 입력 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.PASSWORD_FIRST}>카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id={CARD_ID_VALUE.PASSWORD_FIRST}
            width={INPUT_WIDTH.PASSWORD}
            value={card.password[PASSWORD_DIGIT_INDEX.FIRST]}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id={CARD_ID_VALUE.PASSWORD_SECOND}
            width={INPUT_WIDTH.PASSWORD}
            value={card.password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <span>●</span>
          <span>●</span>
        </PasswordInputWrapper>
        <span>
          {passwordValidation(card.password[PASSWORD_DIGIT_INDEX.FIRST], card.password[PASSWORD_DIGIT_INDEX.SECOND])
            ? ''
            : '비밀번호에는 숫자만 입력 가능합니다.'}
        </span>
      </InputSetWrapper>
      {inputFormValidation(realCardNumber, card) && <button type="submit">다음</button>}
      {/* </button> */}
    </CardInputFormWrapper>
  );
};

const CardInputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;

  & > button {
    text-align: end;
    background: transparent;
    border: none;

    font-weight: 700;
    font-size: 14px;

    cursor: pointer;
    :active {
      opacity: 50%;
      transform: scale(0.98);
    }
  }
`;

const InputSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > label {
    font-weight: 500;
    font-size: 12px;
    color: #525252;
    margin-bottom: 6px;
  }

  & > span {
    color: red;
    font-size: 12px;
    margin-top: 6px;
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
    margin: 8px 0 0 2px;
    width: 27px;
    height: 27px;
    cursor: pointer;
    :hover {
    }
  }
`;

const PasswordInputWrapper = styled.div`
  & > span {
    font-size: 15px;
    :first-of-type {
      margin-left: 14px;
      margin-right: 20px;
    }
  }
`;

const AnswerBoxWrapper = styled.div`
  display: flex;
  padding: 10px;

  margin-left: 1rem;

  width: 10rem;
  height: 2.5rem;

  background: #ecebf1;

  border-radius: 8px;

  & > p {
    align-self: center;
    font-size: 13px;
    color: #636c72;
  }
`;

export default CardInputForm;
