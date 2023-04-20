import React from 'react';
import InputSection from '../Box/InputSection';
import InputBox from '../Common/InputBox';
import { InputStateProps } from '../../types';

const ExpireDateInput = (props: InputStateProps) => {
  const inputs = [
    { type: 'number', maxLength: 2, placeholder: 'MM', required: true },
    { type: 'number', maxLength: 2, placeholder: 'YY', required: true },
  ];
  return (
    <InputSection label="만료일">
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSection>
  );
};

export default ExpireDateInput;
