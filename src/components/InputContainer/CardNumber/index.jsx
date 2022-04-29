import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { isNumberInRange } from '../../InputForm/validation';
import { CARD_NUMBER_TYPE } from '../../types';
import InputContainer from '..';
import Input from '../../Input';

function CardNumberInput({ cardNumber, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeCardNumber = (e, key) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_CARD_NUMBER', payload: { cardNumber, key } });
    }
  };
  return (
    <InputContainer labelTitle="카드번호">
      {Object.keys(cardNumber).map(stateKey => (
        <Input
          key={uid(stateKey)}
          type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
          value={cardNumber[stateKey]}
          onChange={e => onChangeCardNumber(e, stateKey)}
          maxLength={4}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
        />
      ))}
    </InputContainer>
  );
}

CardNumberInput.propTypes = {
  cardNumber: CARD_NUMBER_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};

export default CardNumberInput;
