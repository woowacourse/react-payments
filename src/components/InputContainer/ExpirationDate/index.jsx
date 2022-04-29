import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import { uid } from 'react-uid';
import { findNotCompletedInput } from '../../../utils/util';
import InputContainer from '..';
import Input from '../../Input';

function ExpirationDateInput({ expirationDate, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeExpirationDate = (e, key) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_EXPIRATION_DATE', payload: { date, key } });
    }
  };
  return (
    <InputContainer labelTitle="만료일 (01~12의 월 / 년도)" inputSize="w-50">
      {Object.keys(expirationDate).map(stateKey => (
        <Input
          key={uid(stateKey)}
          type="text"
          placeholder={stateKey === 'month' ? 'MM' : 'YY'}
          value={expirationDate[stateKey]}
          onChange={e => onChangeExpirationDate(e, stateKey)}
          maxLength={2}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
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
