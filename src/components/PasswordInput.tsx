// import styled from "styled-components";
import Input from './Input';
import FieldTitle from './FieldTitle';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Validation from '../domain/InputValidation';
import InputField from './InputField';
import { Password } from '../types/card';
import { ShowComponents } from '../types/showCompents';

interface Props {
  password: Password;
  handleInput: Dispatch<SetStateAction<Password>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function PasswordInput({
  password,
  handleInput,
  handleShowComponent,
}: Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );
  const inputRefs = useRef<Array<React.RefObject<HTMLInputElement>>>(
    Array.from({ length: 1 }, () => React.createRef<HTMLInputElement>())
  );
  useEffect(() => {
    const messages = Object.values(password).map((value) => value.errorMessage);
    setErrorMessages(messages);
  }, [password]);

  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(password).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 1;
    };
    if (checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        passWordInput: true,
      }));
    }
  }, [password, handleShowComponent]);

  const handleUpdateInput = (index: number, value: string) => {
    const cardKey = 'password' as keyof Password;
    handleInput((prevState: Password) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value: value,
        },
      };
    });
  };

  const handleUpdateErrorMessages = (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'password' as keyof Password;
    handleInput((prevState: Password) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          errorMessage: errorMessage,
          isError: isError,
        },
      };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string,
    index: number,
    maxLength: number
  ) => {
    try {
      Validation[info]?.(e.target.value, maxLength);
      handleUpdateErrorMessages(index, '', false);
      handleUpdateInput(index, e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateErrorMessages(index, error.message, true);
      }
    }
  };

  const checkInputError = (index: number) => {
    const cardKey = 'password' as keyof Password;
    return password[cardKey].isError;
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
        {inputRefs.current.map((inputRef, index) => (
          <Input
            key={index}
            type='string'
            maxLength={2}
            placeholder={'**'}
            isError={checkInputError(index)}
            onChange={(e) => handleInputChange(e, 'password', index, 3)}
            inputRef={inputRef}
          />
        ))}
      </InputField>
    </>
  );
}
