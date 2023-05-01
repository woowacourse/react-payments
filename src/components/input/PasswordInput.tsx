import { useRef } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isEmptyInput, isFirst } from '../../utils';
import { hasValidLength, isNumeric } from '../../utils/validator';
import { ERROR, PASSWORD_SIZE, PASSWORD_TEXT } from '../../constants';
import { Password } from '../../types';

interface Props {
  password: Password;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  setPassword: (input: Password) => void;
}

export function PasswordInput({ password, passwordInputRef, setPassword }: Props) {
  const allRef = [passwordInputRef, useRef<HTMLInputElement>(null)];

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(password[index]) && !isFirst(index)) {
      e.preventDefault();
      allRef.at(index - 1)?.current?.focus();
    }
  };

  const handlePasswordInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(e.target.value)) return;

    const newPassword = [...password];
    newPassword[index] = e.target.value;
    setPassword(newPassword);

    if (index < password.length - 1) {
      allRef.at(index + 1)?.current?.focus();
      return;
    }

    const inputs = [...password.slice(0, -1), e.target.value].join('');
    validatePassword(inputs);
  };

  const validatePassword = (inputs: string) => {
    if (!isNumeric(inputs) || !hasValidLength(inputs, PASSWORD_SIZE)) {
      alert(ERROR.INVALID_PASSWORD);
      setPassword(['', '']);

      allRef[0].current?.focus();
      return;
    }
  };

  return (
    <>
      <Style.Label htmlFor='cardPassword0'>
        <Style.Title>
          카드 비밀번호<Style.Essential>*</Style.Essential>
        </Style.Title>
      </Style.Label>
      <Style.Container>
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <InputContainer key={index} width={'43px'}>
              <Input
                id={`cardPassword${index}`}
                ref={allRef[index]}
                value={password[index]}
                width={'43px'}
                maxLength={1}
                type='password'
                inputMode='numeric'
                required
                onChange={(e) => handlePasswordInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                placeholder={PASSWORD_TEXT}
              />
            </InputContainer>
          );
        })}
        <Style.Dot>•</Style.Dot>
        <Style.Dot>•</Style.Dot>
      </Style.Container>
    </>
  );
}

const Style = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;

    width: 193px;
  `,

  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Essential: styled.span`
    color: red;
  `,

  Dot: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43px;
    height: 45px;
  `,
};
