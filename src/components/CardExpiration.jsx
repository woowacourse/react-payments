import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

import CARD_COMPANIES from '../constants';

export default function CardExpiration() {
  const { cardExpiration, cardExpirationErrorMessage, cardCompanyIndex, dispatch } =
    useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_EXPIRATION', value: e.target.value, index });
  };

  const validate = (value) => value.join('') && validator.checkCardExpiration(value);

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

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
            color={cardColor}
            value={cardExpiration[0]}
            onChange={onChangeInput(0)}
          />
          <InputBasic
            type="text"
            placeholder="YY"
            width="48%"
            maxLength="2"
            color={cardColor}
            value={cardExpiration[1]}
            onChange={onChangeInput(1)}
          />
        </InputContainer>
      </InputBox>
      <ErrorMessage
        value={cardExpiration}
        validate={validate}
        type="SET_CARD_EXPIRATION_ERROR_MESSAGE"
      >
        {cardExpirationErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
