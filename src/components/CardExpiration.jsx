import React from 'react';
import InputContainer from '../styles/InputContainer';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';

export default function CardExpiration() {
  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width="50%">
        <InputBasic type="text" placeholder="MM" />
        <InputBasic type="text" placeholder="YY" />
      </InputBox>
    </InputContainer>
  );
}
