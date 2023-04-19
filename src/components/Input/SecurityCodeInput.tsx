import React from 'react';
import InputSection from '../InputSection';
import InputBox from '../InputBox';
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
