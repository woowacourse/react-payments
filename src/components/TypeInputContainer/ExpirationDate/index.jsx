import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import Input from '../../Input';
import { isNumberInRange } from '../../../utils/validation/form';

function ExpirationDateInput({
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
    <LabelInputContainer labelTitle="만료일 (01~12의 월 / 년도)" inputSize="w-50">
      {Object.keys(state).map(stateKey => (
        <Input
          key={uid(stateKey)}
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

ExpirationDateInput.propTypes = {
  state: EXPIRATION_DATE_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default ExpirationDateInput;
