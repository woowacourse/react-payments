import React, { useContext } from 'react';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import TipButton from './TipButton';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

import CARD_COMPANIES from '../constants';

export default function CardCvc() {
  const { cardCvc, cardCvcErrorMessage, cardCompanyIndex, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: 'SET_CARD_CVC', value: e.target.value });
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  return (
    <Container>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <InputBox>
        <InputContainer width="23%">
          <InputBasic
            type="password"
            maxLength="3"
            value={cardCvc}
            color={cardColor}
            onChange={onChangeInput}
          />
        </InputContainer>
        <TipButton />
      </InputBox>
      <ErrorMessage
        value={cardCvc}
        validate={validator.checkCardCvc}
        type="SET_CARD_CVC_ERROR_MESSAGE"
      >
        {cardCvcErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
