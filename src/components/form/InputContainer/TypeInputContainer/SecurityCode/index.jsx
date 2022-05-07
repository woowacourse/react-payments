import React from 'react';
import PropTypes from 'prop-types';
import LabelInputContainer from '../../LabelInputContainer';
import PasswordInput from '../../../Input/PasswordInput';

function SecurityCodeInputContainer({
  state,
  stateName,
  isShowVirtualKeyboard,
  openVirtualKeyboard,
  closeVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  return (
    <LabelInputContainer
      labelTitle="보안코드(CVC/CVV)"
      inputSize="w-25"
      helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
      htmlFor={`${stateName}`}
    >
      <PasswordInput
        id={`${stateName}`}
        value={state}
        maxLength={3}
        required
        inputElementKey={stateName}
        isShowVirtualKeyboard={isShowVirtualKeyboard}
        openVirtualKeyboard={openVirtualKeyboard}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />
    </LabelInputContainer>
  );
}

SecurityCodeInputContainer.propTypes = {
  state: PropTypes.string,
  stateName: PropTypes.string,
  isShowVirtualKeyboard: PropTypes.bool,
  openVirtualKeyboard: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  setInputElement: PropTypes.func,
  nextInputFocus: PropTypes.func,
};

export default SecurityCodeInputContainer;
