import React from 'react';
import InputSectionTemplate from '../InputSectionTemplate';
import InputBox from '../../Common/InputBox';
import { InputStateProps } from '../../../types';

const CardNumberInput = (props: InputStateProps) => {
  const inputs = [
    { type: 'number', maxLength: 4, placeholder: '1234', required: true },
    { type: 'number', maxLength: 4, placeholder: '5678', required: true },
    { type: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
    { type: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
  ];
  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox inputs={inputs} align="center" separator="-" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
