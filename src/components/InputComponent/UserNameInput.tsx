import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { UserName } from '../../types/card';
import { USER_NAME } from '../../constants/system';

interface Props {
  userName: UserName;
  handleInput: {
    handleUpdateUserNameIsNextPage: () => void;
    handleUpdateUserNameInput: (value: string) => void;
    handleUpdateUserNameErrorMessages: (
      errorMessage: string,
      isError: boolean
    ) => void;
  };
}
export default function UserNameInput({
  userName,
  handleInput: {
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
  },
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const errorMessages = Object.values(userName.userNameField).map(
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
      handleUpdateUserNameErrorMessages('', false);
      handleUpdateUserNameInput(e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateUserNameErrorMessages(error.message, true);
      }
    }
  };

  const checkCompleteInput = () => {
    const isNotAllError = Object.values(userName.userNameField).reduce(
      (pre, cur) => {
        if (!cur.isError && cur.value !== '') {
          return pre + 1;
        }
        return pre;
      },
      0
    );
    return isNotAllError === USER_NAME.TOTAL_FIELDS;
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (checkCompleteInput()) {
        handleUpdateUserNameIsNextPage();
      }
    }
  };

  const checkInputError = () => {
    const cardKey = 'userName' as keyof typeof userName.userNameField;
    return userName.userNameField[cardKey].isError;
  };

  return (
    <>
      <FieldTitle title='카드 소유자 이름을 입력해 주세요' />
      <InputField
        label='소유자 이름'
        count={1}
        errorMessages={errorMessages}
      >
        {Array.from({ length: USER_NAME.TOTAL_FIELDS }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={30}
            value={
              userName.userNameField[
                'userName' as keyof typeof userName.userNameField
              ].value
            }
            placeholder={'JOHN DOE'}
            isError={checkInputError()}
            onChange={(e) => handleInputChange(e, 'userName')}
            onKeyDown={(e) => handleKeyDown(e)}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
