import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import { uid } from 'react-uid';
import { findNotCompletedInput } from '../../../utils/util';
import InputContainer from '..';

function PasswordInput({ password, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangePassword = (e, key) => {
    const {
      target: { value: password, maxLength },
    } = e;

    if (isNumberInRange(password, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_PASSWORD',
        payload: { password, key },
      });
    }

    if (password.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, `${stateName}${key}`);

      inputElementsMap[`${stateName}${key}`].isComplete = true;

      element?.focus();
    }
  };
  return (
    <InputContainer labelTitle="카드 비밀번호" inputSize="w-50">
      {Object.keys(password).map(stateKey => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type="text"
          value={password[stateKey]}
          onChange={e => onChangePassword(e, stateKey)}
          maxLength={1}
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
      <div className="inputted-password">*</div>
      <div className="inputted-password">*</div>
    </InputContainer>
  );
}
PasswordInput.propTypes = {
  password: PASSWORD_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};
export default PasswordInput;
