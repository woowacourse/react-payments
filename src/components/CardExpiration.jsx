import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';

export default function CardExpiration() {
  const { cardExpiration, dispatch } = useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_EXPIRATION', value: e.target.value, index });
  };

  return (
    <Container>
      <InputTitle>만료일</InputTitle>
      <InputBox>
        <InputContainer width="40%">
          <InputBasic
            type="text"
            placeholder="MM"
            width="48%"
            maxLength="2"
            value={cardExpiration[0]}
            onChange={onChangeInput(0)}
          />
          <InputBasic
            type="text"
            placeholder="YY"
            width="48%"
            maxLength="2"
            value={cardExpiration[1]}
            onChange={onChangeInput(1)}
          />
        </InputContainer>
      </InputBox>
    </Container>
  );
}
