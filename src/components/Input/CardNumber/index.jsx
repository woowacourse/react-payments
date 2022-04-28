import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import Input from '..';
import { isNumberInRange } from '../../InputForm/validation';
import { CARD_NUMBER_TYPE } from '../../types';

function CardNumberInput({ cardNumber, cardInputDispatch, inputElementsRef, startIndex }) {
  const onChangeCardNumber = (key, e, index) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_CARD_NUMBER', payload: { cardNumber, key } });
    }

    if (cardNumber.length === maxLength) {
      inputElementsRef.current[index + 1]?.focus();
    }
  };
  return (
    <Input labelTitle="카드번호">
      {Object.keys(cardNumber).map((stateKey, index) => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
          value={cardNumber[stateKey]}
          onChange={e => onChangeCardNumber(stateKey, e, startIndex + index)}
          maxLength={4}
          required
          ref={element => (inputElementsRef.current[startIndex + index] = element)}
        />
      ))}
    </Input>
  );
}

CardNumberInput.propTypes = {
  cardNumber: CARD_NUMBER_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  startIndex: PropTypes.number,
};

export default CardNumberInput;
