import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { Password } from '../../types/card';
import { ShowComponents } from '../../types/showComponents';

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
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);


  useEffect(() => {
    const messages = Object.values(password).map((value) => value.errorMessage);
    setErrorMessages(messages);
  }, [password]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
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

  const handleUpdateInput = (value: string) => {
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

  const checkInputError = () => {
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
        {Array.from({length:1}).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={2}
            value={password['password' as keyof Password].value }
            placeholder={'**'}
            isError={checkInputError()}
            onChange={(e) => handleInputChange(e, 'password')}
            inputRef={(element : HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
