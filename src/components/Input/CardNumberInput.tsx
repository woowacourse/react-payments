import React from 'react';
import InputSection from '../Box/InputSection';
import InputBox from '../Common/InputBox';
import { InputStateProps } from '../../types';

const CardNumberInput = (props: InputStateProps) => {
  const inputs = [
    { type: 'number', maxLength: 4, placeholder: '1234', required: true },
    { type: 'number', maxLength: 4, placeholder: '5678', required: true },
    { type: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
    { type: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
  ];
  return (
    <InputSection label="카드 번호">
      <InputBox inputs={inputs} align="center" separator="-" isFullWidth {...props} />
    </InputSection>
  );
};

export default CardNumberInput;
