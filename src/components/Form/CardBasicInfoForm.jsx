import React, { useEffect, useState, useRef } from 'react';
import LabeledInput from '../Common/Input/LabeledInput';
import PropTypes from 'prop-types';
import { isAlphabetOrSpace } from '../../utils/validations';
import { uid } from 'react-uid';
import { checkFormCompletion, checkFormValidation, isNumberInRange } from './validation';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../../types';
import { DISPATCH_TYPE } from '../../constants';

function InputForm({
  cardInput: { cardNumber, expirationDate, ownerName, securityCode, password },
  cardInputDispatch,
  handleChangePage,
}) {
  const [isComplete, setIsComplete] = useState(false);
  const inputElementsRef = useRef([]);

  const nodePushRef = (id, node) => {
    inputElementsRef.current[id] = node;
  };

  const focusNextInput = id => {
    const keys = Object.keys(inputElementsRef.current);
    const nextIndex = keys.indexOf(id) + 1;
    const nextInput = inputElementsRef.current[keys[nextIndex]];
    if (nextInput) {
      nextInput.focus();
    }
  };

  const onChangeCardNumber = (key, e) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: DISPATCH_TYPE.CHANGE_CARD_NUMBER, payload: { cardNumber, key } });

      if (cardNumber.length === maxLength) {
        focusNextInput(key);
      }
    }
  };

  const onChangeExpirationDate = (key, e) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: DISPATCH_TYPE.CHANGE_EXPIRATION_DATE, payload: { date, key } });

      if (date.length === maxLength) {
        focusNextInput(key);
      }
    }
  };

  const onChangeOwnerName = (key, e) => {
    const {
      target: { value: ownerName, maxLength },
    } = e;

    if (isAlphabetOrSpace(ownerName)) {
      cardInputDispatch({
        type: DISPATCH_TYPE.CHANGE_OWNER_NAME,
        payload: { ownerName: ownerName.toUpperCase() },
      });

      if (ownerName.length === maxLength) {
        focusNextInput(key);
      }
    }
  };

  const onChangeSecurityCode = (key, e) => {
    const {
      target: { value: securityCode, maxLength },
    } = e;

    if (isNumberInRange(securityCode, maxLength)) {
      cardInputDispatch({
        type: DISPATCH_TYPE.CHANGE_SECURITY_CODE,
        payload: { securityCode },
      });

      if (securityCode.length === maxLength) {
        focusNextInput(key);
      }
    }
  };

  const onChangePassword = (key, e) => {
    const {
      target: { value: password, maxLength },
    } = e;

    if (isNumberInRange(password, maxLength)) {
      cardInputDispatch({
        type: DISPATCH_TYPE.CHANGE_PASSWORD,
        payload: { password, key },
      });

      if (password.length === maxLength) {
        focusNextInput(key);
      }
    }
  };

  const onClickNextButton = e => {
    e.preventDefault();

    try {
      if (checkFormValidation({ cardNumber, expirationDate, securityCode, password })) {
        handleChangePage('completeAddCardPage');
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
      <LabeledInput labelTitle="카드번호">
        {Object.keys(cardNumber).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type={stateKey === 'firstColumn' || stateKey === 'secondColumn' ? 'text' : 'password'}
            value={cardNumber[stateKey]}
            onChange={e => onChangeCardNumber(stateKey, e)}
            maxLength={4}
            required
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
      </LabeledInput>
      <LabeledInput labelTitle="만료일" inputSize="w-50">
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
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
      </LabeledInput>
      <LabeledInput labelTitle="카드 소유자 이름(선택)">
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          onChange={e => onChangeOwnerName('ownerName', e)}
          maxLength={30}
          ref={nodePushRef.bind(this, 'ownerName')}
        />
      </LabeledInput>
      <LabeledInput
        labelTitle="보안코드(CVC/CVV)"
        inputSize="w-25"
        helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
      >
        <input
          className="input-basic"
          type="password"
          value={securityCode}
          onChange={e => onChangeSecurityCode('securityCode', e)}
          maxLength={3}
          required
          ref={nodePushRef.bind(this, 'securityCode')}
        />
      </LabeledInput>
      <LabeledInput labelTitle="카드 비밀번호" inputSize="w-50">
        {Object.keys(password).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type="text"
            value={password[stateKey]}
            onChange={e => onChangePassword(stateKey, e)}
            maxLength={1}
            required
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
        <div className="inputted-password">*</div>
        <div className="inputted-password">*</div>
      </LabeledInput>
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
  handleChangePage: PropTypes.func,
  cardInputDispatch: PropTypes.func,
};
export default InputForm;
