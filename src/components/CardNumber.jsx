import React from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';

export default function CardNumber() {
  return (
    <Container>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <InputContainer>
          <InputBasic type="text" maxLength="4" width="23%" />
          <InputBasic type="text" maxLength="4" width="23%" />
          <InputBasic type="password" maxLength="4" width="23%" />
          <InputBasic type="password" maxLength="4" width="23%" />
        </InputContainer>
      </InputBox>
    </Container>
  );
}
