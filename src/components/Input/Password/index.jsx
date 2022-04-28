import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import { uid } from 'react-uid';
import Input from '..';

function PasswordInput({ password, cardInputDispatch, inputElementsRef, startIndex }) {
  const onChangePassword = (key, e, index) => {
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
      inputElementsRef.current[index + 1]?.focus();
    }
  };
  return (
    <Input labelTitle="카드 비밀번호" inputSize="w-50">
      {Object.keys(password).map((stateKey, index) => (
        <input
          key={uid(stateKey)}
          className="input-basic"
          type="text"
          value={password[stateKey]}
          onChange={e => onChangePassword(stateKey, e, startIndex + index)}
          maxLength={1}
          required
          ref={element => (inputElementsRef.current[startIndex + index] = element)}
        />
      ))}
      <div className="inputted-password">*</div>
      <div className="inputted-password">*</div>
    </Input>
  );
}
PasswordInput.propTypes = {
  password: PASSWORD_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  startIndex: PropTypes.number,
};
export default PasswordInput;
