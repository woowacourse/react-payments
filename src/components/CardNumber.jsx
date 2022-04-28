import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

export default function CardNumber() {
  const { cardNumber, cardNumberErrorMessage, dispatch } = useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_NUMBER', value: e.target.value, index });
  };

  const validate = (value) => value.join('').length > 0 && validator.checkCardNumber(value);

  return (
    <Container>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <InputContainer>
          <InputBasic
            width="23%"
            type="text"
            maxLength="4"
            value={cardNumber[0]}
            onChange={onChangeInput(0)}
          />
          <InputBasic
            width="23%"
            type="text"
            maxLength="4"
            value={cardNumber[1]}
            onChange={onChangeInput(1)}
          />
          <InputBasic
            width="23%"
            type="password"
            maxLength="4"
            value={cardNumber[2]}
            onChange={onChangeInput(2)}
          />
          <InputBasic
            width="23%"
            type="password"
            maxLength="4"
            value={cardNumber[3]}
            onChange={onChangeInput(3)}
          />
        </InputContainer>
      </InputBox>
      <ErrorMessage value={cardNumber} validate={validate} type="SET_CARD_NUMBER_ERROR_MESSAGE">
        {cardNumberErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
