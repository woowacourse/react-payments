import React, { useContext } from 'react';
import * as S from '../styles.js';
import CardContext from '../CardContext';
import ErrorMessage from './ErrorMessage';
import validator from '../validations/validator';
import TYPES from '../reducers/card.actions.js';

export default function CardNumber({ color }) {
  const { cardNumber, cardNumberErrorMessage, cardCompanyIndex, dispatch } =
    useContext(CardContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_NUMBER, value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyIndex === -1 && dispatch({ type: TYPES.SET_MODAL_FLAG, flag: true });
  };

  return (
    <S.Container>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <S.ExtendedInputContainer>
          <S.InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={color}
            value={cardNumber[0]}
            onChange={onChangeInput(0)}
            onFocus={onFocusInput}
          />
          <S.Hyphen color={color}>-</S.Hyphen>
          <S.InputBasic
            width="20%"
            type="text"
            maxLength="4"
            color={color}
            value={cardNumber[1]}
            onChange={onChangeInput(1)}
            onFocus={onFocusInput}
          />
          <S.Hyphen color={color}>-</S.Hyphen>
          <S.InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={color}
            value={cardNumber[2]}
            onChange={onChangeInput(2)}
            onFocus={onFocusInput}
          />
          <S.Hyphen color={color}>-</S.Hyphen>
          <S.InputBasic
            width="20%"
            type="password"
            maxLength="4"
            color={color}
            value={cardNumber[3]}
            onChange={onChangeInput(3)}
            onFocus={onFocusInput}
          />
        </S.ExtendedInputContainer>
      </S.InputBox>
      <ErrorMessage
        value={cardNumber}
        validate={validator.checkCardNumber}
        type={TYPES.SET_NUMBER_ERROR_MESSAGE}
      >
        {cardNumberErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
