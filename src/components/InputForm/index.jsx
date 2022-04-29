import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { objectToString } from '../../utils/util';
import { checkFormCompletion, checkFormValidation } from './validation';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../types';
import CardNumberInput from '../Input/CardNumber';
import ExpirationDateInput from '../Input/ExpirationDate';
import OwnerNameInput from '../Input/OwnerName';
import SecurityCodeInput from '../Input/SecurityCode';
import PasswordInput from '../Input/Password';
import { useFormComplete } from '../../hooks/useFormComplete';

function InputForm({
  cardInput: { cardNumber, expirationDate, ownerName, securityCode, password },
  cardInputDispatch,
}) {
  const isComplete = useFormComplete(
    { cardNumber, expirationDate, ownerName, securityCode, password },
    checkFormCompletion,
  );

  const inputElementsRef = useRef({});

  const onClickNextButton = e => {
    e.preventDefault();

    try {
      if (checkFormValidation({ expirationDate })) {
        alert(`카드 번호는 ${objectToString({ targetObject: cardNumber })} 입니다 \n
        만료일 ${objectToString({ targetObject: expirationDate, separator: '/' })} 입니다 \n
        카드 소유자 이름 ${ownerName} 입니다 \n
        보안코드 ${securityCode} 입니다 \n
        비밀번호 ${objectToString({ targetObject: password })} \n`);
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  return (
    <form onSubmit={onClickNextButton}>
      <CardNumberInput
        cardNumber={cardNumber}
        cardInputDispatch={cardInputDispatch}
        inputElementsRef={inputElementsRef}
        stateName="cardNumber"
      ></CardNumberInput>
      <ExpirationDateInput
        expirationDate={expirationDate}
        cardInputDispatch={cardInputDispatch}
        inputElementsRef={inputElementsRef}
        stateName="expirationDate"
      ></ExpirationDateInput>
      <OwnerNameInput
        ownerName={ownerName}
        cardInputDispatch={cardInputDispatch}
        inputElementsRef={inputElementsRef}
        stateName="ownerName"
      ></OwnerNameInput>
      <SecurityCodeInput
        securityCode={securityCode}
        cardInputDispatch={cardInputDispatch}
        inputElementsRef={inputElementsRef}
        stateName="securityCode"
      ></SecurityCodeInput>
      <PasswordInput
        password={password}
        cardInputDispatch={cardInputDispatch}
        inputElementsRef={inputElementsRef}
        stateName="password"
      ></PasswordInput>

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
