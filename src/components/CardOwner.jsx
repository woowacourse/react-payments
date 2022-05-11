import React, { useEffect } from 'react';
import useDispatch from '../hooks/useDispatch';
import useInput from '../hooks/useInput';

import ErrorMessage from './common/ErrorMessage';
import LetterCounter from './common/LetterCounter';

import * as S from './common/styles';

const MAX_NAME_LENGTH = 30;

function CardOwner() {
  const dispatch = useDispatch();
  const [value, onChangeInputValue, isValid, errorMessage] = useInput({
    type: 'string',
    maxLength: MAX_NAME_LENGTH,
  });

  useEffect(() => {
    if (!isValid) return;

    dispatch({
      type: 'CARD_OWNER_NAME',
      cardOwnerName: value.trim(),
      isCorrectOwnerName: value.trim() !== '',
    });
  }, [value, isValid, dispatch]);

  return (
    <S.InputContainer position="relative">
      <div>
        <LetterCounter maxLength={30} currentLength={value.length} />
        <S.Label>카드 소유자 이름(선택)</S.Label>
        <S.InputWrapperForm>
          <S.Span width={'100%'}>
            <S.Input
              type={'text'}
              placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
              maxLength={'30'}
              onChange={onChangeInputValue}
              value={value}
              required
            />
          </S.Span>
        </S.InputWrapperForm>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default React.memo(CardOwner);
