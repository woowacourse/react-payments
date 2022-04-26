import React from 'react';

import InputContainer from '../styles/InputContainer';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';

export default function CardNumber() {
  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <InputBasic type="text" maxLength="4" />
        <InputBasic type="text" maxLength="4" />
        <InputBasic type="password" maxLength="4" />
        <InputBasic type="password" maxLength="4" />
      </InputBox>
    </InputContainer>
  );
}
