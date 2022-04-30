import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { isNumberInRange } from '../../InputForm/validation';
import { CARD_NUMBER_TYPE } from '../../types';
import Input from '../../Input';
import LabelInputContainer from '../../LabelInputContainer';

function CardNumberInput({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
  const onChangeCardNumber = (e, key) => {
    const {
      target: { value: cardNumber, maxLength },
    } = e;

    if (isNumberInRange(cardNumber, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_CARD_NUMBER', payload: { cardNumber, key } });
    }
  };
  return (
    <LabelInputContainer labelTitle="카드번호">
      {Object.keys(state).map(stateKey => (
        <Input
          key={uid(stateKey)}
          type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
          value={state[stateKey]}
          onChange={e => onChangeCardNumber(e, stateKey)}
          maxLength={4}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
        />
      ))}
    </LabelInputContainer>
  );
}

CardNumberInput.propTypes = {
  state: CARD_NUMBER_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default CardNumberInput;
