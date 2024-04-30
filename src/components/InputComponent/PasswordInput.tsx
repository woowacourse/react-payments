import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { Password } from '../../types/card';
import { PASSWORD } from '../../constants/system';

interface Props {
  password: Password;
  handleInput: {
    handleUpdatePasswordInput: (value: string) => void;
    handleUpdatePasswordErrorMessages: (
      errorMessage: string,
      isError: boolean
    ) => void;
  };
}
export default function PasswordInput({
  password,
  handleInput: { handleUpdatePasswordInput, handleUpdatePasswordErrorMessages },
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const errorMessages = Object.values(password.passwordField).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdatePasswordErrorMessages('', false);
      handleUpdatePasswordInput(e.target.value);
      if(password.isNextField && e.target.value.length !== PASSWORD.FIELD_LENGTH){
        throw new Error('2자리의 숫자를 입력해주세요');
      }
    } catch (error) {
      if (error instanceof Error) {
        handleUpdatePasswordErrorMessages(error.message, true);
      }
    }
  };

  const checkInputError = () => {
    const cardKey = 'password' as keyof typeof password.passwordField;
    return password.passwordField[cardKey].isError;
  };

  return (
    <>
      <FieldTitle
        title='비밀번호를 입력해 주세요 '
        subtitle='앞의 2자리를 입력해주세요'
      />
      <InputField
        label='비밀번호 앞 2자리'
        count={1}
        errorMessages={errorMessages}
      >
        {Array.from({ length: 1 }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={2}
            value={
              password.passwordField[
                'password' as keyof typeof password.passwordField
              ].value
            }
            placeholder={'**'}
            isError={checkInputError()}
            onChange={(e) => handleInputChange(e, 'password')}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
