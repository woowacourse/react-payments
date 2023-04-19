import React from 'react';
import InputSection from '../Box/InputSection';
import InputBox from '../Common/InputBox';
import { InputStateProps } from '../../types';

const SecurityCodeInput = (props: InputStateProps) => {
  const inputs = [{ type: 'password', maxLength: 3, security: true }];
  return (
    <InputSection label="보안 코드(CVC/CVV)">
      <InputBox inputs={inputs} align="center" {...props} />
    </InputSection>
  );
};

export default SecurityCodeInput;
