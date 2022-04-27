import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, InputContainer, Label, InputWrapper } from './common';
import InactiveContainer from './common/InactiveContainer';

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

function CardPassword() {
  const [pwd, setPwd] = useState({
    pwdNoA: '',
    pwdNoB: '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    try {
      validator(value);
    } catch (err) {
      console.log(err.message);
      return;
    }
    setPwd(prevPwds => ({
      ...prevPwds,
      [name]: value,
    }));
  };

  return (
    <InputContainer>
      <Label>카드 비밀번호</Label>
      <InputPasswordWrapper>
        <InputWrapper>
          <Input type="password" maxLength={1} name="pwdNoA" onChange={handleInputChange} value={pwd.pwdNoA} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" maxLength={1} name="pwdNoB" onChange={handleInputChange} value={pwd.pwdNoB} />
        </InputWrapper>
        <InactiveContainer />
        <InactiveContainer />
      </InputPasswordWrapper>
    </InputContainer>
  );
}

export default CardPassword;
