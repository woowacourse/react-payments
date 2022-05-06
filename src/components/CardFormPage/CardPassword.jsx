import React, { useEffect } from 'react';
import styled from 'styled-components';

import { InputContainer, Label, InputWrapper } from '../common/styled';
import InactiveContainer from '../common/InactiveContainer';
import ErrorMessage from '../common/ErrorMessage';
import Input from '../common/Input';

import useInputHandler from '../../hooks/useInputHandler';
import { validatePassword } from '../../validator';

const InputPasswordWrapper = styled.div`
  display: flex;
  gap: 1em;
  width: 50%;
`;

function CardPassword({ pwd, isCorrectPwd }) {
  const { errorMessage, setErrorMessage, updateInputState } = useInputHandler(validatePassword, {
    type: 'UPDATE_PWD',
    key: 'pwd',
    prevData: pwd,
  });

  const handleInputChange = ({ target }) => {
    updateInputState(target);
  };

  useEffect(() => {
    if (isCorrectPwd) setErrorMessage('');
  }, [isCorrectPwd, setErrorMessage]);

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
