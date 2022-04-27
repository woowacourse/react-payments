import React from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';
import { isNotAlphabet } from '../../utils/validations';
import { objectToString } from '../../utils/util';
import { uid } from 'react-uid';
import { checkFormCompletion, isNumberInRange } from './validation';

function InputForm({
  cardNumber,
  setCardNumber,
  expirationDate,
  setExpirationDate,
  ownerName,
  setOwnerName,
  securityCode,
  setSecurityCode,
  password,
  setPassword,
}) {
  const onChangeCardNumber = (key, e) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      setCardNumber(prev => ({ ...prev, [`${key}`]: cardNumber }));
    }
  };

  const onChangeExpirationDate = (key, e) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      setExpirationDate(prev => ({ ...prev, [`${key}`]: date }));
    }
  };

  const onChangeOwnerName = e => {
    const {
      target: { value },
    } = e;

    if (isNotAlphabet(value)) {
      return;
    }

    setOwnerName(value.toUpperCase());
  };

  const onChangeSecurityCode = e => {
    const {
      target: { value: securityCode, maxLength },
    } = e;

    if (isNumberInRange(securityCode, maxLength)) {
      setSecurityCode(securityCode);
    }
  };

  const onChangePassword = (key, e) => {
    const {
      target: { value, maxLength },
    } = e;

    if (isNumberInRange(value, maxLength)) {
      setPassword(prev => ({ ...prev, [`${key}`]: value }));
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

  return (
    <form onSubmit={onClickNextButton}>
      <Input labelTitle="카드번호">
        <div className="input-box">
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
        </div>
      </Input>
      <Input labelTitle="만료일" hasBox>
        <div className="input-box w-50">
          {Object.keys(expirationDate).map(stateKey => (
            <input
              key={uid(stateKey)}
              className="input-basic"
              type="number"
              placeholder={stateKey === 'month' ? 'MM' : 'YY'}
              value={expirationDate[stateKey]}
              onChange={e => onChangeExpirationDate(stateKey, e)}
              maxLength={2}
              required
            />
          ))}
        </div>
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
      <Input labelTitle="보안코드(CVC/CVV)">
        <input
          className="input-basic w-25"
          type="password"
          value={securityCode}
          onChange={onChangeSecurityCode}
          maxLength={3}
          required
        />
      </Input>
      <Input labelTitle="카드 비밀번호">
        {Object.keys(password).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic w-15"
            type="number"
            value={password[stateKey]}
            onChange={e => onChangePassword(stateKey, e)}
            maxLength={1}
            required
          />
        ))}
        <input className="input-basic w-15" type="password" disabled />
        <input className="input-basic w-15" type="password" disabled />
      </Input>
      <button className="button-box">
        <span className="button-text">다음</span>
      </button>
    </form>
  );
}

InputForm.propTypes = {
  cardNumber: PropTypes.object,
  setCardNumber: PropTypes.func,
  expirationDate: PropTypes.object,
  setExpirationDate: PropTypes.func,
  ownerName: PropTypes.string,
  setOwnerName: PropTypes.func,
  securityCode: PropTypes.string,
  setSecurityCode: PropTypes.func,
  password: PropTypes.object,
  setPassword: PropTypes.func,
};

export default InputForm;
