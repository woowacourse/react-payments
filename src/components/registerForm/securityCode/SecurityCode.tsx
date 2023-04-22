import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';
import CreditCardContext from '../../../contexts/InputValueContext';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';

function SecurityCode() {
  const [creditCardInfo, setCreditCard] = useContext(CreditCardContext);
  const [error, setError] = useState(false);

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredValue = event.currentTarget.value as string;
    if (!ONLY_NUMBER_REGEXP.test(enteredValue)) return;

    try {
      if (enteredValue.length > 0 && enteredValue.length !== 3) throw new Error();
      setError(false);
    } catch {
      setError(true);
    } finally {
      if (!setCreditCard) return;
      setCreditCard('securityCode', enteredValue);
    }
  };

  return (
    <SecurityCodeContainer>
      <FormLabel>{'보안 코드(CVC/CVV)'}</FormLabel>
      <Input
        value={creditCardInfo.securityCode}
        onChange={codeChange}
        maxLength={3}
        type="password"
        customInputStyle={SecurityInput}
      />
      {error && <ErrorSpan>보안 코드는 3자리 입니다.</ErrorSpan>}
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
