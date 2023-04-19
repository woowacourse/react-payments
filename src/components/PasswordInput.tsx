import { useRef, useState } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

export const PasswordInput = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && secondNumber === '') {
      e.preventDefault();
      firstInputRef.current?.focus();
    }
  };

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.preventDefault();

      alert('유효한 비밀번호가 아닙니다.');
      e.target.value = '';
      setFirstNumber('');
      setSecondNumber('');

      firstInputRef.current?.focus();
    }
  };

  return (
    <Style.Wrapper>
      <InputWrapper width={43}>
        <Input
          ref={firstInputRef}
          value={firstNumber}
          width={43}
          maxLength={1}
          type="password"
          inputMode="numeric"
          required
          onChange={(e) => {
            validatePassword(e);
            setFirstNumber(e.target.value);
            if (e.target.value.length === 1) secondInputRef.current?.focus();
          }}
        />
      </InputWrapper>
      <InputWrapper width={43}>
        <Input
          ref={secondInputRef}
          value={secondNumber}
          width={43}
          maxLength={1}
          type="password"
          inputMode="numeric"
          required
          onChange={(e) => {
            validatePassword(e);
            setSecondNumber(e.target.value);
          }}
          onKeyDown={handleBackspacePress}
        />
      </InputWrapper>
      <Style.DotContainer>•</Style.DotContainer>
      <Style.DotContainer>•</Style.DotContainer>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 193px;
  `,
  Input: styled.input`
    width: 43px;
    height: 45px;
    text-align: center;

    padding: 0;
  `,
  DotContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43px;
    height: 45px;
  `,
};
