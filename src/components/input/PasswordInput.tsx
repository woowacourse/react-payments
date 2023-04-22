import styled from 'styled-components';
import { useRef } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';

interface Props {
  passwordInputRef: React.RefObject<HTMLInputElement>;
  activateNextButton: () => void;
  password: {
    firstPassword: string;
    secondPassword: string;
  };
  setPassword: React.Dispatch<
    React.SetStateAction<{
      firstPassword: string;
      secondPassword: string;
    }>
  >;
}

export const PasswordInput = ({
  passwordInputRef,
  activateNextButton,
  password,
  setPassword,
}: Props) => {
  const secondInputRef = useRef<HTMLInputElement>(null);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && password.secondPassword === '') {
      e.preventDefault();
      passwordInputRef.current?.focus();
    }
  };

  const handleFirstPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validatePassword(e);

    setPassword({
      ...password,
      firstPassword: e.target.value,
    });

    if (e.target.value.length === 1) secondInputRef.current?.focus();
  };

  const handleSecondPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validatePassword(e);

    setPassword({
      ...password,
      secondPassword: e.target.value,
    });

    if (e.target.value) activateNextButton();
  };

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.preventDefault();

      alert('유효한 비밀번호가 아닙니다.');
      e.target.value = '';
      setPassword({
        firstPassword: '',
        secondPassword: '',
      });

      passwordInputRef.current?.focus();
    }
  };

  return (
    <>
      <Style.Label>
        <Style.Title>카드 비밀번호</Style.Title>
      </Style.Label>
      <Style.Wrapper>
        <InputWrapper width={43}>
          <Input
            ref={passwordInputRef}
            value={password.firstPassword}
            width={43}
            maxLength={1}
            type='password'
            inputMode='numeric'
            required
            onChange={handleFirstPasswordInputChange}
            placeholder='•'
          />
        </InputWrapper>
        <InputWrapper width={43}>
          <Input
            ref={secondInputRef}
            value={password.secondPassword}
            width={43}
            maxLength={1}
            type='password'
            inputMode='numeric'
            required
            onChange={handleSecondPasswordInputChange}
            onKeyDown={handleBackspacePress}
            placeholder='•'
          />
        </InputWrapper>
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
