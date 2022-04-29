import React from 'react';
import PropTypes from 'prop-types';
import { isNumberInRange } from '../../InputForm/validation';
import { findNotCompletedInput } from '../../../utils/util';
import { useEffect } from 'react';
import { useFindNextInput } from '../../../hooks/useNextInputFoucs';
import InputContainer from '..';

function SecurityCodeInput({ securityCode, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeSecurityCode = e => {
    const {
      target: { value: securityCode, maxLength },
    } = e;

    if (isNumberInRange(securityCode, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_SECURITY_CODE',
        payload: { securityCode },
      });
    }

    if (securityCode.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, stateName);

      inputElementsMap[stateName].isComplete = true;

      element?.focus();
    }
  };

  return (
    <InputContainer
      labelTitle="보안코드(CVC/CVV)"
      inputSize="w-25"
      helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
    >
      <input
        className="input-basic"
        type="password"
        value={securityCode}
        onChange={onChangeSecurityCode}
        maxLength={3}
        required
        ref={element => {
          const { current } = inputElementsRef;

          current[stateName] = {
            element,
            isComplete: element?.value.length === element?.maxLength,
          };
        }}
      />
    </InputContainer>
  );
}
SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};
export default SecurityCodeInput;
