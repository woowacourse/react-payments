import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../types';
import { isNumberInRange } from '../../InputForm/validation';
import { uid } from 'react-uid';
import InputContainer from '..';
import Input from '../../Input';

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
  };

  return (
    <InputContainer labelTitle="카드 비밀번호" inputSize="w-50">
      {Object.keys(password).map(stateKey => (
        <Input
          key={uid(stateKey)}
          type="text"
          value={password[stateKey]}
          onChange={e => onChangePassword(e, stateKey)}
          maxLength={1}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
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
