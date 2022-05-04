import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';
import ErrorMessage from './common/ErrorMessage';
import InactiveContainer from './common/InactiveContainer';

import * as CommonStyles from './common/styles';
import * as CardPasswordStyle from './common/styles/CardPassword.style';

const S = { ...CommonStyles, ...CardPasswordStyle };

const MAX_PASSWORD_UNIT = 1;

function CardPassword({ dispatch }) {
  const [value, onChangeInputValue, isValid, errorMessage] = useInput({
    type: 'number',
    maxLength: MAX_PASSWORD_UNIT,
    initialValue: { pwdNoA: '', pwdNoB: '' },
  });

  useEffect(() => {
    if (!isValid) return;

    const isCorrectPwd = Object.values(value).join('').length === 2;

    dispatch({ type: 'CARD_PASSWORD', isCorrectPwd });
  }, [value, isValid, dispatch]);

  return (
    <S.InputContainer>
      <S.Label>카드 비밀번호</S.Label>
      <S.InputPasswordWrapper>
        <S.InputWrapper>
          <S.Span>
            <S.Input
              type={'password'}
              maxLength={1}
              name={'pwdNoA'}
              onChange={onChangeInputValue}
              value={value.pwdNoA}
            />
          </S.Span>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Span>
            <S.Input
              type={'password'}
              maxLength={1}
              name={'pwdNoB'}
              onChange={onChangeInputValue}
              value={value.pwdNoB}
            />
          </S.Span>
        </S.InputWrapper>
        <InactiveContainer />
        <InactiveContainer />
      </S.InputPasswordWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default React.memo(CardPassword);
