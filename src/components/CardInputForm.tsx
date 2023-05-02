import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import CardInput from './CardInput';
import {
  CARD_NUMBER_ERASE_SYMBOL,
  INPUT_WIDTH,
  PASSWORD_DIGIT_INDEX,
  CARD_ID_VALUE,
  ERASE_UNTIL_CARD_NUMBER,
  INPUT_MAX_LENGTH,
  BACKSPASE_KEY,
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
import {
  handleCardNumberChanged,
  handleCardNumberKey,
  handleExpiredDateChanged,
  handleExpiredDateKey,
  handleOwnerChanged,
} from '../domain/CardInput';
import { useSetValue } from '../usehooks/useSetValue';

interface CardInputFormProps {
  card: CardType;
  setCard: (value: CardType) => void;
  onSubmit: (e: FormEvent) => void;
}

const CardInputForm = (props: CardInputFormProps) => {
  const [value, changeValue] = useSetValue(JSON.parse(JSON.stringify(props.card)), props.setCard);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [realCardNumber, setRealCardNumber] = useState<string>('');

  const handleCardChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case CARD_ID_VALUE.CARD_NUMBER:
        if (e.target.value.length > INPUT_MAX_LENGTH.cardNumber) return;
        setRealCardNumber(realCardNumber + e.target.value[e.target.value.length - 1].trim());
        handleCardNumberChanged(e);
        break;
      case CARD_ID_VALUE.EXPIRED_DATE:
        handleExpiredDateChanged(e);
        break;
      case CARD_ID_VALUE.OWNER_NAME:
        handleOwnerChanged(e);
        break;
    }

    changeValue(e.target.id, e.target.value);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case CARD_ID_VALUE.CARD_NUMBER:
        handleCardNumberKey(e);
        realCardNumberKey(e);
        break;

      case CARD_ID_VALUE.EXPIRED_DATE:
        handleExpiredDateKey(e);
        break;
    }
    changeValue(e.currentTarget.id, e.currentTarget.value);
  };

  const handlePasswordChanged = (digit: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = [...value.password];
    newPassword[digit] = e.target.value;
    changeValue(e.target.type, newPassword);
  };

  const realCardNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === BACKSPASE_KEY) {
      if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_FOURTH)
        setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_FOURTH).trim());
      if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_THIRD)
        setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_THIRD).trim());
      if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_SECOND)
        setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_SECOND).trim());
      if (realCardNumber.length <= CARD_NUMBER_ERASE_SYMBOL.REAL_FIRST)
        setRealCardNumber(realCardNumber.substring(0, ERASE_UNTIL_CARD_NUMBER.REAL_FIRST).trim());
    }
  };

  return (
    <CardInputFormWrapper onSubmit={props.onSubmit}>
      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.CARD_NUMBER}>카드 번호</label>
        <CardInput
          id={CARD_ID_VALUE.CARD_NUMBER}
          placeholder="카드 번호를 입력해 주세요."
          value={value.cardNumber}
          isSecured={false}
          isAutoFocus={true}
          isRequired={true}
          onChange={handleCardChanged}
          onKeyDown={handleCardKeyDown}
        />
        <span>{cardNumberValidation(realCardNumber) ? '' : '카드 번호에는 숫자만 입력 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.EXPIRED_DATE}>만료일</label>
        <CardInput
          id={CARD_ID_VALUE.EXPIRED_DATE}
          placeholder="MM / YY"
          width={INPUT_WIDTH.EXPIRED_DATE}
          value={value.expiredDate}
          isSecured={false}
          isAutoFocus={false}
          isRequired={true}
          onChange={handleCardChanged}
          onKeyDown={handleCardKeyDown}
        />
        <span>{expiredDateValidation(value.expiredDate) ? '' : '유효하지 않은 입력(월/연)입니다.'}</span>
      </InputSetWrapper>
      <InputSetWrapper>
        <OwnerNameLabelWrapper>
          <label htmlFor={CARD_ID_VALUE.OWNER_NAME}>카드 소유자 이름 (선택)</label>
          <span>{value.ownerName.length}/30</span>
        </OwnerNameLabelWrapper>

        <CardInput
          id={CARD_ID_VALUE.OWNER_NAME}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={value.ownerName}
          isSecured={false}
          isAutoFocus={false}
          isRequired={false}
          onChange={handleCardChanged}
        />
        <span>{ownerNameValidation(value.ownerName) ? '' : '카드 소유자 이름은 영어만 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.CVC}>보안 코드(CVC/CVV)</label>
        <CvcInputWrapper>
          <CardInput
            id={CARD_ID_VALUE.CVC}
            width={INPUT_WIDTH.CVC}
            value={value.cvc}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handleCardChanged}
          />
          <img src={QuestionMark} alt="도움말" onClick={() => setIsAnswered(!isAnswered)} />
          {isAnswered && (
            <AnswerBoxWrapper>
              <p>카드 뒷면의 보안 3자리 숫자를 입력해 주세요.</p>
            </AnswerBoxWrapper>
          )}
        </CvcInputWrapper>
        <span>{cvcValidation(value.cvc) ? '' : 'cvc는 번호만 입력 가능합니다.'}</span>
      </InputSetWrapper>

      <InputSetWrapper>
        <label htmlFor={CARD_ID_VALUE.PASSWORD_FIRST}>카드 비밀번호</label>
        <PasswordInputWrapper>
          <CardInput
            id={CARD_ID_VALUE.PASSWORD_FIRST}
            width={INPUT_WIDTH.PASSWORD}
            value={value.password[PASSWORD_DIGIT_INDEX.FIRST]}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.FIRST)}
          />
          <CardInput
            id={CARD_ID_VALUE.PASSWORD_SECOND}
            width={INPUT_WIDTH.PASSWORD}
            value={value.password[PASSWORD_DIGIT_INDEX.SECOND]}
            isSecured={true}
            isAutoFocus={false}
            isRequired={true}
            onChange={handlePasswordChanged(PASSWORD_DIGIT_INDEX.SECOND)}
          />
          <span>●</span>
          <span>●</span>
        </PasswordInputWrapper>
        <span>
          {passwordValidation(value.password[PASSWORD_DIGIT_INDEX.FIRST], value.password[PASSWORD_DIGIT_INDEX.SECOND])
            ? ''
            : '비밀번호에는 숫자만 입력 가능합니다.'}
        </span>
      </InputSetWrapper>
      {inputFormValidation(realCardNumber, value) && <button type="submit">다음</button>}
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
