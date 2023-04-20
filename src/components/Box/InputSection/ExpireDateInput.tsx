import React from 'react';
import InputSectionTemplate from '../InputSectionTemplate';
import InputBox from '../../Common/InputBox';
import { InputStateProps } from '../../../types';

const ExpireDateInput = (props: InputStateProps) => {
  const inputs = [
    { type: 'number', maxLength: 2, placeholder: 'MM', required: true },
    { type: 'number', maxLength: 2, placeholder: 'YY', required: true },
  ];
  return (
    <InputSectionTemplate label="만료일">
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
