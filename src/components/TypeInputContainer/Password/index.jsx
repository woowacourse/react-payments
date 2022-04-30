import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import Input from '../../Input';
import { isNumberInRange } from '../../../utils/validation/form';

function PasswordInput({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
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
    <LabelInputContainer labelTitle="카드 비밀번호" inputSize="w-50" htmlFor={`${stateName}`}>
      {Object.keys(state).map((stateKey, idx) => (
        <Input
          key={uid(stateKey)}
          id={idx === 0 ? `${stateName}` : null}
          type="password"
          value={state[stateKey]}
          onChange={e => onChangePassword(e, stateKey)}
          maxLength={1}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
        />
      ))}
      <div className="inputted-password">*</div>
      <div className="inputted-password">*</div>
    </LabelInputContainer>
  );
}

PasswordInput.propTypes = {
  state: PASSWORD_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default PasswordInput;
