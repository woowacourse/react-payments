import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

export default function CardExpiration({ color }) {
  const { cardExpiration, cardExpirationErrorMessage, dispatch } = useContext(CardContext);

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
            color={color}
            value={cardExpiration[0]}
            onChange={onChangeInput(0)}
          />
          <InputBasic
            type="text"
            placeholder="YY"
            width="48%"
            maxLength="2"
            color={color}
            value={cardExpiration[1]}
            onChange={onChangeInput(1)}
          />
        </InputContainer>
      </InputBox>
      <ErrorMessage
        value={cardExpiration}
        validate={validator.checkCardExpiration}
        type="SET_CARD_EXPIRATION_ERROR_MESSAGE"
      >
        {cardExpirationErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
