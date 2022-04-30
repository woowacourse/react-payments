import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import TextInput from '../../Input/TextInput';
import { isNumberInRange } from '../../../utils/validation/form';

function ExpirationDateInputContainer({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
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
          type="text"
          placeholder={stateKey === 'month' ? 'MM' : 'YY'}
          value={state[stateKey]}
          onChange={e => onChangeExpirationDate(e, stateKey)}
          maxLength={2}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
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
