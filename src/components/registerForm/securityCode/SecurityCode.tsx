import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';

function SecurityCode() {
  const [creditCardInfo, setCreditCard] = useContext(CreditCardContext);
  const [validStatus, setValidStatus] = useState({
    isValid: true,
    message: '',
  });

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredCode = event.currentTarget.value as string;

    if (!ONLY_NUMBER_REGEXP.test(enteredCode)) {
      setValidStatus({
        isValid: false,
        message: '숫자만 입력 가능합니다.',
      });

      return;
    }

    if (enteredCode.length > 3) return;

    setValidStatus({
      isValid: true,
      message: '',
    });

    if (!setCreditCard) return;
    setCreditCard('securityCode', enteredCode);
  };

  const _onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    const enteredValue = event.currentTarget.value as string;
    if (enteredValue.length !== 3) {
      setValidStatus({
        isValid: false,
        message: '보안 코드 3자리를 입력해주세요.',
      });

      return;
    }
  };

  return (
    <SecurityCodeContainer>
      <FormLabel>{'보안 코드(CVC/CVV)'}</FormLabel>
      <Input
        value={creditCardInfo.securityCode}
        onChange={_onChange}
        onBlur={_onBlur}
        maxLength={3}
        type="password"
        customInputStyle={SecurityInput}
      />
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </SecurityCodeContainer>
  );
}

export default SecurityCode;

const SecurityCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const SecurityInput = css`
  width: 84px;
  letter-spacing: 7px;
  text-align: center;
  font-size: 28px;
`;
