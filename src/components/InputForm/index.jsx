import React, { useEffect, useState } from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';
import { isAlphabetOrSpace } from '../../utils/validations';
import { objectToString } from '../../utils/util';
import { uid } from 'react-uid';
import { checkFormCompletion, isNumberInRange } from './validation';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../types';

function InputForm({
  cardInput: { cardNumber, expirationDate, ownerName, securityCode, password },
  cardInputDispatch,
}) {
  const [isComplete, setIsComplete] = useState(false);

  const onChangeCardNumber = (key, e) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_CARD_NUMBER', payload: { cardNumber, key } });
    }
  };

  const onChangeExpirationDate = (key, e) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_EXPIRATION_DATE', payload: { date, key } });
    }
  };

  const onChangeOwnerName = e => {
    const {
      target: { value: ownerName },
    } = e;

    if (isAlphabetOrSpace(ownerName)) {
      cardInputDispatch({
        type: 'CHANGE_OWNER_NAME',
        payload: { ownerName: ownerName.toUpperCase() },
      });
    }
  };

  const onChangeSecurityCode = e => {
    const {
      target: { value: securityCode, maxLength },
    } = e;

    if (isNumberInRange(securityCode, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_SECURITY_CODE',
        payload: { securityCode },
      });
    }
  };

  const onChangePassword = (key, e) => {
    const {
      target: { value: password, maxLength },
    } = e;

    if (isNumberInRange(password, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_PASSWORD',
        payload: { password, key },
      });
    }
  };

  const onClickNextButton = e => {
    e.preventDefault();

    try {
      if (checkFormCompletion({ cardNumber, expirationDate, securityCode, password })) {
        alert(`카드 번호는 ${objectToString(cardNumber)} 입니다 \n
        만료일 ${objectToString(expirationDate, '/')} 입니다 \n
        카드 소유자 이름 ${ownerName} 입니다 \n
        보안코드 ${securityCode} 입니다 \n
        비밀번호 ${objectToString(password)} \n`);
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  useEffect(() => {
    try {
      if (checkFormCompletion({ cardNumber, expirationDate, securityCode, password })) {
        setIsComplete(true);
      }
    } catch (e) {
      setIsComplete(false);
    }
  }, [cardNumber, expirationDate, ownerName, securityCode, password]);

  return (
    <form onSubmit={onClickNextButton}>
      <Input labelTitle="카드번호">
        {Object.keys(cardNumber).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
            value={cardNumber[stateKey]}
            onChange={e => onChangeCardNumber(stateKey, e)}
            maxLength={4}
            required
          />
        ))}
      </Input>
      <Input labelTitle="만료일" inputSize="w-50">
        {Object.keys(expirationDate).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type="text"
            placeholder={stateKey === 'month' ? 'MM' : 'YY'}
            value={expirationDate[stateKey]}
            onChange={e => onChangeExpirationDate(stateKey, e)}
            maxLength={2}
            required
          />
        ))}
      </Input>
      <Input labelTitle="카드 소유자 이름(선택)">
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          onChange={onChangeOwnerName}
          maxLength={30}
        />
      </Input>
      <Input labelTitle="보안코드(CVC/CVV)" inputSize="w-25">
        <input
          className="input-basic"
          type="password"
          value={securityCode}
          onChange={onChangeSecurityCode}
          maxLength={3}
          required
        />
        <div className="help-content">?</div>
      </Input>
      <Input labelTitle="카드 비밀번호" inputSize="w-50">
        {Object.keys(password).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type="text"
            value={password[stateKey]}
            onChange={e => onChangePassword(stateKey, e)}
            maxLength={1}
            required
          />
        ))}
        <div className="inputted-password">*</div>
        <div className="inputted-password">*</div>
      </Input>
      {isComplete && (
        <button className="button-box">
          <span className="button-text">다음</span>
        </button>
      )}
    </form>
  );
}

InputForm.propTypes = {
  cardInput: PropTypes.shape({
    cardNumber: CARD_NUMBER_TYPE,
    expirationDate: EXPIRATION_DATE_TYPE,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    password: PASSWORD_TYPE,
  }),
  cardInputDispatch: PropTypes.func,
};

export default InputForm;
