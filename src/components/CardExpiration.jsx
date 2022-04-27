import React from 'react';
import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';

export default function CardExpiration() {
  return (
    <Container>
      <InputTitle>만료일</InputTitle>
      <InputBox>
        <InputContainer width="40%">
          <InputBasic type="text" placeholder="MM" width="48%" />
          <InputBasic type="text" placeholder="YY" width="48%" />
        </InputContainer>
      </InputBox>
    </Container>
  );
}
