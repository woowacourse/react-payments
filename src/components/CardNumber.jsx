import React, { useContext } from 'react';
import * as S from 'styles.js';
import ErrorMessage from 'components/ErrorMessage';
import validator from 'validations/validator';
import { TYPES, CardStateContext, CardDispatchContext } from 'context/CardContext';
import { AutoFocusInputBox } from './AutoFocusInputBox';

export default function CardNumber({ color }) {
  const { cardNumber, cardNumberErrorMessage, cardCompanyIndex } = useContext(CardStateContext);

  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_NUMBER, value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyIndex === -1 && dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: true });
  };

  return (
    <S.Container>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox isSpaceBetween="true">
        <AutoFocusInputBox maxValueLength={4}>
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
        </AutoFocusInputBox>
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
