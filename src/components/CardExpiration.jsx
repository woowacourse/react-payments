import React, { useContext } from 'react';
import * as S from 'styles.js';
import ErrorMessage from 'components/ErrorMessage';
import validator from 'lib/validations/validator';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import { AutoFocusInputBox } from './AutoFocusInputBox';

export default function CardExpiration({ color }) {
  const { cardExpiration, cardExpirationErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_EXPIRATION, value: e.target.value, index });
  };

  return (
    <>
      <S.InputTitle>만료일</S.InputTitle>
      <S.InputBox>
        <S.InputContainer width="40%">
          <AutoFocusInputBox maxValueLength={2}>
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
          </AutoFocusInputBox>
        </S.InputContainer>
      </S.InputBox>
      <ErrorMessage
        value={cardExpiration}
        validate={validator.checkCardExpiration}
        type={TYPES.SET_EXPIRATION_ERROR_MESSAGE}
      >
        {cardExpirationErrorMessage}
      </ErrorMessage>
    </>
  );
}
