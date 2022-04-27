import React from 'react';
import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

export const CardExpireDateInputForm = () => {
  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width="50%">
        <InputBasic type="text" placeholder="MM" />
        /
        <InputBasic type="text" placeholder="YY" />
      </InputBox>
    </InputContainer>
  );
};
