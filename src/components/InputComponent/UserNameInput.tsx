import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { UserName } from '../../types/card';
import { ShowComponents } from '../../types/showComponents';

interface Props {
  userName: UserName;
  handleInput: Dispatch<SetStateAction<UserName>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function UserNameInput({
  userName,
  handleInput,
  handleShowComponent,
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const errorMessages = Object.values(userName).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleUpdateInput = (value: string) => {
    const cardKey = 'userName' as keyof UserName;
    handleInput((prevState: UserName) => {
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
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'userName' as keyof UserName;
    handleInput((prevState: UserName) => {
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
    info: string
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateErrorMessages('', false);
      handleUpdateInput(e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateErrorMessages(error.message, true);
      }
    }
  };

  const checkCompleteInput = () => {
    const isNotAllError = Object.values(userName).reduce((pre, cur) => {
      if (!cur.isError && cur.value !== '') {
        return pre + 1;
      }
      return pre;
    }, 0);
    return isNotAllError === 1;
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (checkCompleteInput()) {
        handleShowComponent((prev) => ({
          ...prev,
          CVCInput: true,
        }));
      }
    }
  };

  const checkInputError = () => {
    const cardKey = 'userName' as keyof UserName;
    return userName[cardKey].isError;
  };

  return (
    <>
      <FieldTitle title='카드 소유자 이름을 입력해 주세요' />
      <InputField
        label='소유자 이름'
        count={1}
        errorMessages={errorMessages}
      >
        {Array.from({ length: 1 }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={30}
            value={userName['userName' as keyof UserName].value}
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
