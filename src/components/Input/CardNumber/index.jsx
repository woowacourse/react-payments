import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import Input from '..';
import { isNumberInRange } from '../../InputForm/validation';
import { CARD_NUMBER_TYPE } from '../../types';
import { findNotCompletedInput } from '../../../utils/util';

function CardNumberInput({ cardNumber, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeCardNumber = (e, key) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_CARD_NUMBER', payload: { cardNumber, key } });
    }

    if (cardNumber.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, `${stateName}${key}`);

      inputElementsMap[`${stateName}${key}`].isComplete = true;

      element?.focus();
    }

    // [inputElementsRef.current, nextInput]
  };
  return (
    <Input labelTitle="카드번호">
      {Object.keys(cardNumber).map(stateKey => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
          value={cardNumber[stateKey]}
          onChange={e => onChangeCardNumber(e, stateKey)}
          maxLength={4}
          required
          ref={element => {
            const { current } = inputElementsRef;

            current[`${stateName}${stateKey}`] = {
              element,
              isComplete: element?.value.length === element?.maxLength,
            };
          }}
        />
      ))}
    </Input>
  );
}

CardNumberInput.propTypes = {
  cardNumber: CARD_NUMBER_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};

export default CardNumberInput;
