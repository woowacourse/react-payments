import React, { useContext } from 'react';
import * as S from 'styles.js';
import ErrorMessage from 'components/ErrorMessage';
import validator from 'validations/validator';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import { AutoFocusInputBox } from './AutoFocusInputBox';

export default function CardPassword({ color }) {
  const { cardPassword, cardPasswordErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_PASSWORD, value: e.target.value, index });
  };

  return (
    <>
      <S.InputTitle>카드 비밀번호</S.InputTitle>
      <S.ExtendedInputBox>
        <AutoFocusInputBox maxValueLength={1}>
          <S.InputBasic
            type="password"
            width="43px"
            maxLength="1"
            color={color}
            value={cardPassword[0]}
            onChange={onChangeInput(0)}
          />
          <S.InputBasic
            type="password"
            width="43px"
            maxLength="1"
            color={color}
            value={cardPassword[1]}
            onChange={onChangeInput(1)}
          />
          <S.PasswordBox>
            <S.Circle size="5px" color={color} />
          </S.PasswordBox>
          <S.PasswordBox>
            <S.Circle size="5px" color={color} />
          </S.PasswordBox>
        </AutoFocusInputBox>
      </S.ExtendedInputBox>
      <ErrorMessage
        value={cardPassword}
        validate={validator.checkCardPassword}
        type={TYPES.SET_PASSWORD_ERROR_MESSAGE}
      >
        {cardPasswordErrorMessage}
      </ErrorMessage>
    </>
  );
}
