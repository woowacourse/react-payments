import { useRef } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

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
            type="password"
            inputMode="numeric"
            required
            onChange={(e) => {
              validatePassword(e);

              setPassword({
                ...password,
                firstPassword: e.target.value,
              });

              if (e.target.value.length === 1) secondInputRef.current?.focus();
            }}
            placeholder="•"
          />
        </InputWrapper>
        <InputWrapper width={43}>
          <Input
            ref={secondInputRef}
            value={password.secondPassword}
            width={43}
            maxLength={1}
            type="password"
            inputMode="numeric"
            required
            onChange={(e) => {
              validatePassword(e);

              setPassword({
                ...password,
                secondPassword: e.target.value,
              });

              if (e.target.value) activateNextButton();
            }}
            onKeyDown={handleBackspacePress}
            placeholder="•"
          />
        </InputWrapper>
        <Style.DotContainer>•</Style.DotContainer>
        <Style.DotContainer>•</Style.DotContainer>
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
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
