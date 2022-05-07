import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_TYPE } from '../../../../types';
import { uid } from 'react-uid';
import LabelInputContainer from '../../LabelInputContainer';
import PasswordInput from '../../../Input/PasswordInput';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../../../../../utils/constants';

function PasswordInputContainer({
  state,
  stateName,
  setIsShowVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  return (
    <LabelInputContainer labelTitle="카드 비밀번호" inputSize="w-50" htmlFor={`${stateName}`}>
      {Object.keys(state).map((stateKey, idx) => (
        <PasswordInput
          key={uid(stateKey)}
          id={idx === 0 ? `${stateName}` : null}
          value={state[stateKey]}
          maxLength={1}
          required
          inputElementKey={`${stateName}${INPUT_ELEMENT_KEY_SEPARATOR}${stateKey}`}
          setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
          setInputElement={setInputElement}
          nextInputFocus={nextInputFocus}
        />
      ))}
      <div className="inputted-password">*</div>
      <div className="inputted-password">*</div>
    </LabelInputContainer>
  );
}

PasswordInputContainer.propTypes = {
  state: PASSWORD_TYPE,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default PasswordInputContainer;
