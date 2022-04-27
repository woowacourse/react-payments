import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import TipButton from './TipButton';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';

export default function CardCvc() {
  const { cardCvc, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: 'SET_CARD_CVC', value: e.target.value });
  };

  return (
    <Container>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <InputBox>
        <InputContainer width="23%">
          <InputBasic type="password" maxLength="3" value={cardCvc} onChange={onChangeInput} />
        </InputContainer>
        <TipButton />
      </InputBox>
    </Container>
  );
}
