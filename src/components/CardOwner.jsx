import React, { useContext } from 'react';
import * as S from 'styles.js';
import validator from 'validations/validator';
import ErrorMessage from 'components/ErrorMessage';
import { TYPES, CardStateContext, CardDispatchContext } from 'context/CardContext';

export default function CardOwner({ color }) {
  const { cardOwner, cardOwnerErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (e) => {
    dispatch({ type: TYPES.SET_OWNER, value: e.target.value });
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.InputTitle marginBottom="0px">카드소유자 이름(선택)</S.InputTitle>
        <S.NameLength isLengthValidated={cardOwner.length > 30}>
          <span>{cardOwner.length}</span>/<span>30</span>
        </S.NameLength>
      </S.TitleWrapper>
      <S.InputBox>
        <S.InputBasicLeft
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          maxLength="30"
          color={color}
          value={cardOwner}
          onChange={onChangeInput}
        />
      </S.InputBox>
      <ErrorMessage
        value={cardOwner}
        validate={validator.checkCardOwner}
        type={TYPES.SET_OWNER_ERROR_MESSAGE}
      >
        {cardOwnerErrorMessage}
      </ErrorMessage>
    </S.Container>
  );
}
