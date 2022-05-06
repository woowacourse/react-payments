import { useContext } from 'react';
import * as S from 'styles.js';
import validator from 'lib/validations/validator';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Label from 'components/Label/Label';

export default function CardOwner({ color }) {
  const { cardOwner, cardOwnerErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (e) => {
    dispatch({ type: TYPES.SET_OWNER, value: e.target.value });
  };
  const name = '카드소유자 이름(선택)';

  return (
    <>
      <S.TitleWrapper>
        <Label htmlFor={name} marginBottom="0px">
          {name}
        </Label>
        <S.NameLength isLengthValidated={cardOwner.length > 30}>
          <span>{cardOwner.length}</span>/<span>30</span>
        </S.NameLength>
      </S.TitleWrapper>
      <S.InputBox>
        <S.InputContainer>
          <S.InputBasicLeft
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            type="text"
            maxLength="30"
            color={color}
            value={cardOwner}
            onChange={onChangeInput}
            id={name}
          />
        </S.InputContainer>
      </S.InputBox>
      <ErrorMessage
        value={cardOwner}
        validate={validator.checkCardOwner}
        type={TYPES.SET_OWNER_ERROR_MESSAGE}
      >
        {cardOwnerErrorMessage}
      </ErrorMessage>
    </>
  );
}
