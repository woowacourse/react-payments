import React from 'react';
import PropTypes from 'prop-types';
import LabelInputContainer from '../../LabelInputContainer';
import PasswordInput from '../../Input/PasswordInput';

function SecurityCodeInputContainer({
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
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
        maxLength={3}
        required
        inputElementsRef={inputElementsRef}
        inputElementKey={stateName}
        setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
        setPasswordInputValue={value =>
          cardInputDispatch({ type: 'CHANGE_SECURITY_CODE', payload: { securityCode: value } })
        }
      />
    </LabelInputContainer>
  );
}

SecurityCodeInputContainer.propTypes = {
  state: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default SecurityCodeInputContainer;
