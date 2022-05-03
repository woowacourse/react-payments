import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { InputContainer, Label, InputWrapper } from './common/styled';
import InactiveContainer from './common/InactiveContainer';
import ErrorMessage from './common/ErrorMessage';
import Input from './common/Input';

const InputPasswordWrapper = styled.div`
  display: flex;
  gap: 1em;
  width: 50%;
`;

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

function CardPassword({ pwd, setPwd }) {
  const [errorMessage, setErrorMessage] = useState('');

  const isCorrectPwd = useMemo(() => Object.values(pwd).join('').length === 2, [pwd]);

  const handleInputChange = ({ target: { name, value } }) => {
    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    setErrorMessage('');
    setPwd(prevPwds => ({
      ...prevPwds,
      [name]: value,
    }));

    if (!isCorrectPwd) {
      setErrorMessage('모두 입력해주세요.');
    }
  };

  useEffect(() => {
    if (isCorrectPwd) setErrorMessage('');
  }, [isCorrectPwd]);

  return (
    <InputContainer>
      <Label>카드 비밀번호</Label>
      <InputPasswordWrapper>
        <InputWrapper>
          <Input type="password" maxLength={1} name="pwdNoA" onChange={handleInputChange} value={pwd.pwdNoA} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" maxLength={1} name="pwdNoB" onChange={handleInputChange} value={pwd.pwdNoB} required />
        </InputWrapper>
        <InactiveContainer />
        <InactiveContainer />
      </InputPasswordWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardPassword;
