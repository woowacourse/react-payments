import React, { useState, useEffect } from 'react';
import ErrorMessage from './common/ErrorMessage';
import InactiveContainer from './common/InactiveContainer';

import * as CommonStyles from './common/styles';
import * as CardPasswordStyle from './common/styles/CardPassword.style';

const S = { ...CommonStyles, ...CardPasswordStyle };

const MAX_PASSWORD_UNIT = 1;

const validator = value => {
  if (value.includes(' ') || Number.isNaN(Number(value))) {
    throw new Error('숫자만 입력해주세요.');
  }

  if (value.includes('.')) {
    throw new Error('소수점은 입력하실 수 없습니다.');
  }

  if (value.length > MAX_PASSWORD_UNIT) {
    throw new Error(`한 칸당 최대 ${MAX_PASSWORD_UNIT}개의 숫자를 입력해야 합니다.`);
  }
};

function CardPassword({ dispatch }) {
  const [pwd, setPwd] = useState({
    pwdNoA: '',
    pwdNoB: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }
    setPwd(prevPwds => ({
      ...prevPwds,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isCorrectPwd = Object.values(pwd).join('').length === 2;

    if (isCorrectPwd) setErrorMessage('');

    dispatch({ type: 'CARD_PASSWORD', isCorrectPwd });
  }, [pwd, dispatch]);

  return (
    <S.InputContainer>
      <S.Label>카드 비밀번호</S.Label>
      <S.InputPasswordWrapper>
        <S.InputWrapper>
          <S.Span>
            <S.Input type={'password'} maxLength={1} name={'pwdNoA'} onChange={handleInputChange} value={pwd.pwdNoA} />
          </S.Span>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Span>
            <S.Input type={'password'} maxLength={1} name={'pwdNoB'} onChange={handleInputChange} value={pwd.pwdNoB} />
          </S.Span>
        </S.InputWrapper>
        <InactiveContainer />
        <InactiveContainer />
      </S.InputPasswordWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default CardPassword;
