import React, { useContext } from 'react';
import * as S from '../styles.js';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';
import { CARD_COMPANIES } from '../constants';
import { SET_CVC, SET_CVC_ERROR_MESSAGE } from '../reducers/card.actions.js';

export default function CardCvc() {
  const { cardCvc, cardCvcErrorMessage, cardCompanyIndex, dispatch } = useContext(CardContext);

  const onChangeInput = (e) => {
    dispatch({ type: SET_CVC, value: e.target.value });
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  return (
    <S.Container>
      <S.InputTitle>보안코드(CVC/CVV)</S.InputTitle>
      <S.InputBox>
        <S.InputContainer width="23%">
          <S.InputBasic
            type="password"
            maxLength="3"
            value={cardCvc}
            color={cardColor}
            onChange={onChangeInput}
          />
        </S.InputContainer>
        <S.TipButton>?</S.TipButton>
      </S.InputBox>
      <ErrorMessage value={cardCvc} validate={validator.checkCardCvc} type={SET_CVC_ERROR_MESSAGE}>
        {cardCvcErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
