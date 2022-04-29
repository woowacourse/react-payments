import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import { uid } from 'react-uid';
import { findNotCompletedInput } from '../../../utils/util';
import InputContainer from '..';

function ExpirationDateInput({ expirationDate, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeExpirationDate = (e, key) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_EXPIRATION_DATE', payload: { date, key } });
    }

    if (date.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, `${stateName}${key}`);

      inputElementsMap[`${stateName}${key}`].isComplete = true;

      element?.focus();
    }
  };
  return (
    <InputContainer labelTitle="만료일 (01~12의 월 / 년도)" inputSize="w-50">
      {Object.keys(expirationDate).map(stateKey => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type="text"
          placeholder={stateKey === 'month' ? 'MM' : 'YY'}
          value={expirationDate[stateKey]}
          onChange={e => onChangeExpirationDate(e, stateKey)}
          maxLength={2}
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
    </InputContainer>
  );
}

ExpirationDateInput.propTypes = {
  expirationDate: EXPIRATION_DATE_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};
export default ExpirationDateInput;
