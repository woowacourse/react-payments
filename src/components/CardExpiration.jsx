import React, { useContext } from 'react';

import * as S from '../styles.js';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';
import TYPES from '../reducers/card.actions.js';

export default function CardExpiration({ color }) {
  const { cardExpiration, cardExpirationErrorMessage, dispatch } = useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_EXPIRATION, value: e.target.value, index });
  };

  return (
    <S.Container>
      <S.InputTitle>만료일</S.InputTitle>
      <S.InputBox>
        <S.InputContainer width="40%">
          <S.InputBasic
            type="text"
            placeholder="MM"
            width="48%"
            maxLength="2"
            color={color}
            value={cardExpiration[0]}
            onChange={onChangeInput(0)}
          />
          <S.InputBasic
            type="text"
            placeholder="YY"
            width="48%"
            maxLength="2"
            color={color}
            value={cardExpiration[1]}
            onChange={onChangeInput(1)}
          />
        </S.InputContainer>
      </S.InputBox>
      <ErrorMessage
        value={cardExpiration}
        validate={validator.checkCardExpiration}
        type={TYPES.SET_EXPIRATION_ERROR_MESSAGE}
      >
        {cardExpirationErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
