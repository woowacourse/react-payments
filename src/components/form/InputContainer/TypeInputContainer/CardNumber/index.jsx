import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { CARD_NUMBER_TYPE } from '../../../../types';
import TextInput from '../../../Input/TextInput';
import LabelInputContainer from '../../LabelInputContainer';
import { isNumberInRange } from '../../../../../utils/validation/form';
import PasswordInput from '../../../Input/PasswordInput';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../../../../../utils/constants';

function CardNumberInputContainer({
  state,
  cardInputDispatch,
  // inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
  setInputElement,
  nextInputFocus,
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
    <LabelInputContainer labelTitle="카드번호" htmlFor={`${stateName}`}>
      {Object.keys(state).map((stateKey, idx) =>
        stateKey === 'first' || stateKey === 'second' ? (
          <TextInput
            key={uid(stateKey)}
            id={idx === 0 ? `${stateName}` : null}
            value={state[stateKey]}
            maxLength={4}
            required
            inputElementKey={`${stateName}${INPUT_ELEMENT_KEY_SEPARATOR}${stateKey}`}
            setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
            onChange={e => onChangeCardNumber(e, stateKey)}
            setInputElement={setInputElement}
            nextInputFocus={nextInputFocus}
          />
        ) : (
          <PasswordInput
            key={uid(stateKey)}
            id={idx === 0 ? `${stateName}` : null}
            value={state[stateKey]}
            maxLength={4}
            required
            inputElementKey={`${stateName}${INPUT_ELEMENT_KEY_SEPARATOR}${stateKey}`}
            setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
            setInputElement={setInputElement}
            nextInputFocus={nextInputFocus}
          />
        ),
      )}
    </LabelInputContainer>
  );
}

CardNumberInputContainer.propTypes = {
  state: CARD_NUMBER_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default CardNumberInputContainer;
