import React from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import TipButton from './TipButton';
import InputContainer from '../styles/InputContainer';

export default function CardCvc() {
  return (
    <Container>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <InputBox>
        <InputContainer width="23%">
          <InputBasic type="text" maxLength="3" />
        </InputContainer>
        <TipButton />
      </InputBox>
    </Container>
  );
}
