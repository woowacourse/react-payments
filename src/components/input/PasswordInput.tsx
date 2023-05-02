import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isValidPassword } from '../../cardInputValidator';
import { isEmptyInput, isFirst, isLast } from '../../utils';
import { isNumeric } from '../../utils/validator';
import { ERROR, PASSWORD_SIZE, PASSWORD_TEXT } from '../../constants';
import { Password } from '../../types';

interface Props {
  password: Password;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  setPassword: (input: Password) => void;
}

export function PasswordInput({ password, passwordInputRef, setPassword }: Props) {
  const [passwordError, setPasswordError] = useState('');
  const allRef = [passwordInputRef, useRef<HTMLInputElement>(null)];

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(password[index]) && !isFirst(index)) {
      e.preventDefault();
      allRef.at(index - 1)?.current?.focus();
    }
  };

  const handlePasswordInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = [...password];
    newPassword[index] = e.target.value;
    setPassword(newPassword);

    if (!isNumeric(e.target.value)) {
      setPasswordError(ERROR.IS_NOT_NUMBER);
      return;
    }

    setPasswordError('');

    if (!isLast(index, PASSWORD_SIZE) && !isEmptyInput(e.target.value)) {
      allRef.at(index + 1)?.current?.focus();
      return;
    }
  };

  const updatePasswordError = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    const inputs = [...password.slice(0, -1), e.target.value];

    if (!isValidPassword(inputs)) {
      setPasswordError(ERROR.INVALID_PASSWORD);
      return;
    }

    setPasswordError('');
  };

  return (
    <Style.Container onBlur={updatePasswordError}>
      <Style.Label htmlFor='cardPassword0'>
        <Style.Title>
          카드 비밀번호<Style.Essential>*</Style.Essential>
        </Style.Title>
      </Style.Label>
      <Style.InputsContainer>
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
                aria-labelledby='passwordCaption'
              />
            </InputContainer>
          );
        })}
        <Style.Dot>•</Style.Dot>
        <Style.Dot>•</Style.Dot>
      </Style.InputsContainer>
      <Style.Caption id='passwordCaption' aria-live='assertive'>
        {passwordError}
      </Style.Caption>
    </Style.Container>
  );
}

const Style = {
  Container: styled.fieldset`
    border: none;
  `,

  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;
    margin-bottom: 10px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Essential: styled.span`
    color: red;
  `,

  InputsContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 193px;
  `,

  Dot: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43px;
    height: 45px;
  `,

  Caption: styled.p`
    height: 8px;
    margin-top: 8px;

    font-size: 10px;
    color: #db5959;
  `,
};
