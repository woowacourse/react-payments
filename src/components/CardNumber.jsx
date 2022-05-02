import React, { useContext } from 'react';
import styled from 'styled-components';

import * as S from '../styles.js';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';

const ExtendedInputContainer = styled(S.InputContainer)`
  justify-content: space-between;
`;

const Hyphen = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 47px;
  color: ${({ color }) => color || '#737373'};
`;

export default function CardNumber({ color }) {
  const { cardNumber, cardNumberErrorMessage, cardCompanyIndex, dispatch } =
    useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: 'SET_CARD_NUMBER', value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyIndex === -1 && dispatch({ type: 'SET_MODAL_FLAG', flag: true });
  };

  return (
    <S.Container>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <ExtendedInputContainer>
          <S.InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={color}
            value={cardNumber[0]}
            onChange={onChangeInput(0)}
            onFocus={onFocusInput}
          />
          <Hyphen color={color}>-</Hyphen>
          <S.InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={color}
            value={cardNumber[1]}
            onChange={onChangeInput(1)}
            onFocus={onFocusInput}
          />
          <Hyphen color={color}>-</Hyphen>
          <S.InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={color}
            value={cardNumber[2]}
            onChange={onChangeInput(2)}
            onFocus={onFocusInput}
          />
          <Hyphen color={color}>-</Hyphen>
          <S.InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={color}
            value={cardNumber[3]}
            onChange={onChangeInput(3)}
            onFocus={onFocusInput}
          />
        </ExtendedInputContainer>
      </S.InputBox>
      <ErrorMessage
        value={cardNumber}
        validate={validator.checkCardNumber}
        type="SET_CARD_NUMBER_ERROR_MESSAGE"
      >
        {cardNumberErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
