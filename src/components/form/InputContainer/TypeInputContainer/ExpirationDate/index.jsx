import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import TextInput from '../../../Input/TextInput';
import { isNumberInRange } from '../../../../../utils/validation/form';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../../../../../utils/constants';

function ExpirationDateInputContainer({
  state,
  cardInputDispatch,
  stateName,
  setIsShowVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  const onChangeExpirationDate = (e, key) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_EXPIRATION_DATE', payload: { date, key } });
    }
  };
  return (
    <LabelInputContainer
      labelTitle="만료일 (01~12의 월 / 년도)"
      inputSize="w-50"
      htmlFor={`${stateName}`}
    >
      {Object.keys(state).map((stateKey, idx) => (
        <TextInput
          key={uid(stateKey)}
          id={idx === 0 ? `${stateName}` : null}
          placeholder={stateKey === 'month' ? 'MM' : 'YY'}
          value={state[stateKey]}
          maxLength={2}
          required
          onChange={e => onChangeExpirationDate(e, stateKey)}
          inputElementKey={`${stateName}${INPUT_ELEMENT_KEY_SEPARATOR}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
          setInputElement={setInputElement}
          nextInputFocus={nextInputFocus}
        />
      ))}
    </LabelInputContainer>
  );
}

ExpirationDateInputContainer.propTypes = {
  state: EXPIRATION_DATE_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default ExpirationDateInputContainer;
