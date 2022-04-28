import React from 'react';
import PropTypes from 'prop-types';
import { EXPIRATION_DATE_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import Input from '..';
import { uid } from 'react-uid';

function ExpirationDateInput({ expirationDate, cardInputDispatch, inputElementsRef, startIndex }) {
  const onChangeExpirationDate = (key, e, index) => {
    const {
      target: { value: date, maxLength },
    } = e;

    if (isNumberInRange(date, maxLength)) {
      cardInputDispatch({ type: 'CHANGE_EXPIRATION_DATE', payload: { date, key } });
    }

    if (date.length === maxLength) {
      inputElementsRef.current[index + 1]?.focus();
    }
  };
  return (
    <Input labelTitle="만료일" inputSize="w-50">
      {Object.keys(expirationDate).map((stateKey, index) => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type="text"
          placeholder={stateKey === 'month' ? 'MM' : 'YY'}
          value={expirationDate[stateKey]}
          onChange={e => onChangeExpirationDate(stateKey, e, startIndex + index)}
          maxLength={2}
          required
          ref={element => (inputElementsRef.current[startIndex + index] = element)}
        />
      ))}
    </Input>
  );
}

ExpirationDateInput.propTypes = {
  expirationDate: EXPIRATION_DATE_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  startIndex: PropTypes.number,
};
export default ExpirationDateInput;
