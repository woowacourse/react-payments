import styled from 'styled-components';
import { useRef } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { PassWord } from '../../types';
import { hasValidLength, isNumeric } from '../../validator';

interface Props {
  password: PassWord;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  setPassword: React.Dispatch<React.SetStateAction<PassWord>>;
  activateNextButton: () => void;
}

export const PasswordInput = ({
  password,
  passwordInputRef,
  setPassword,
  activateNextButton,
}: Props) => {
  const allRef = [passwordInputRef, useRef<HTMLInputElement>(null)];

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && password[index] === '' && index !== 0) {
      e.preventDefault();
      allRef[index - 1].current?.focus();
    }
  };

  const handlePasswordInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => {
      const currentPassword = [...prev];
      currentPassword[index] = e.target.value;
      return currentPassword;
    });

    if (index < password.length - 1) {
      allRef[index + 1].current?.focus();
      return;
    }

    const inputs = [...password.slice(0, -1), e.target.value].join('');
    validatePassword(inputs);
  };

  const validatePassword = (inputs: string) => {
    if (!isNumeric(inputs) || !hasValidLength(inputs, 2)) {
      alert('유효한 비밀번호가 아닙니다.');
      setPassword(['', '']);

      allRef[0].current?.focus();
      return;
    }

    activateNextButton();
  };

  return (
    <>
      <Style.Label>
        <Style.Title>카드 비밀번호</Style.Title>
      </Style.Label>
      <Style.Wrapper>
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <InputWrapper width={43}>
              <Input
                ref={allRef[index]}
                value={password[index]}
                width={43}
                maxLength={1}
                type='password'
                inputMode='numeric'
                required
                onChange={(e) => handlePasswordInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                placeholder='•'
              />
            </InputWrapper>
          );
        })}
        <Style.Dot>•</Style.Dot>
        <Style.Dot>•</Style.Dot>
      </Style.Wrapper>
    </>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 193px;
  `,

  Label: styled.div`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Dot: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43px;
    height: 45px;
  `,
};
