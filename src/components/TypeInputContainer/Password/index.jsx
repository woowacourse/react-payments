import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import PasswordInput from '../../Input/PasswordInput';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../../../utils/constants';

function PasswordInputContainer({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
  return (
    <LabelInputContainer labelTitle="카드 비밀번호" inputSize="w-50" htmlFor={`${stateName}`}>
      {Object.keys(state).map((stateKey, idx) => (
        <PasswordInput
          key={uid(stateKey)}
          id={idx === 0 ? `${stateName}` : null}
          maxLength={1}
          required
          inputElementsRef={inputElementsRef}
          inputElementKey={`${stateName}${INPUT_ELEMENT_KEY_SEPARATOR}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
          setPasswordInputValue={value =>
            cardInputDispatch({
              type: 'CHANGE_PASSWORD',
              payload: { password: value, key: stateKey },
            })
          }
        />
      ))}
      <div className="inputted-password">*</div>
      <div className="inputted-password">*</div>
    </LabelInputContainer>
  );
}

PasswordInputContainer.propTypes = {
  state: PASSWORD_TYPE,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default PasswordInputContainer;
