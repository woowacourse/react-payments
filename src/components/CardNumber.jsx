import React, { useContext } from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import InputTitle from '../styles/InputTitle';
import InputBox from '../styles/InputBox';
import InputBasic from '../styles/InputBasic';
import InputContainer from '../styles/InputContainer';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

import CARD_COMPANIES from '../constants';

const ExtendedInputContainer = styled(InputContainer)`
  justify-content: space-between;
`;

const Hyphen = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 47px;
  color: ${({ color }) => color || '#737373'};
`;

export default function CardNumber() {
  const { cardNumber, cardNumberErrorMessage, cardCompanyIndex, dispatch } =
    useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_NUMBER', value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyIndex === -1 && dispatch({ type: 'SET_MODAL_FLAG', flag: true });
  };

  const validate = (value) => value.join('').length > 0 && validator.checkCardNumber(value);

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  return (
    <Container>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <ExtendedInputContainer>
          <InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={cardColor}
            value={cardNumber[0]}
            onChange={onChangeInput(0)}
            onFocus={onFocusInput}
          />
          <Hyphen color={cardColor}>-</Hyphen>
          <InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={cardColor}
            value={cardNumber[1]}
            onChange={onChangeInput(1)}
            onFocus={onFocusInput}
          />
          <Hyphen color={cardColor}>-</Hyphen>
          <InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={cardColor}
            value={cardNumber[2]}
            onChange={onChangeInput(2)}
            onFocus={onFocusInput}
          />
          <Hyphen color={cardColor}>-</Hyphen>
          <InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={cardColor}
            value={cardNumber[3]}
            onChange={onChangeInput(3)}
            onFocus={onFocusInput}
          />
        </ExtendedInputContainer>
      </InputBox>
      <ErrorMessage value={cardNumber} validate={validate} type="SET_CARD_NUMBER_ERROR_MESSAGE">
        {cardNumberErrorMessage}
      </ErrorMessage>
    </Container>
  );
}
