import React from 'react';
import PropTypes from 'prop-types';
import { isNumberInRange } from '../../InputForm/validation';
import Input from '..';

function SecurityCodeInput({ securityCode, cardInputDispatch, inputElementsRef, startIndex }) {
  const onChangeSecurityCode = (e, index) => {
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
      inputElementsRef.current[index + 1]?.focus();
    }
  };

  return (
    <Input
      labelTitle="보안코드(CVC/CVV)"
      inputSize="w-25"
      helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
    >
      <input
        className="input-basic"
        type="password"
        value={securityCode}
        onChange={e => onChangeSecurityCode(e, startIndex)}
        maxLength={3}
        required
        ref={element => (inputElementsRef.current[startIndex] = element)}
      />
    </Input>
  );
}
SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  startIndex: PropTypes.number,
};
export default SecurityCodeInput;
