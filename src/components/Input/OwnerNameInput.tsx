import React from 'react';
import InputSection from '../InputSection';
import InputBox from '../InputBox';
import { InputStateProps } from '../../types';

const OwnerNameInput = (props: InputStateProps) => {
  const inputs = [
    { type: 'text', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
  ];
  return (
    <InputSection label="카드 소유자 이름(선택)">
      <InputBox inputs={inputs} align="left" isFullWidth {...props} />
    </InputSection>
  );
};

export default OwnerNameInput;
