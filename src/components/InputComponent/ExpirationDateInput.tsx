import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { ExpirationDate } from '../../types/card';
import { ShowComponents } from '../../types/showComponents';

interface Props {
  expirationDate: ExpirationDate;
  handleInput: Dispatch<SetStateAction<ExpirationDate>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function ExpirationDateInput({
  expirationDate,
  handleInput,
  handleShowComponent,
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);
  const errorMessages = Object.values(expirationDate).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(expirationDate).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 2;
    };
    if (checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        userNameInput: true,
      }));
    }
  }, [expirationDate, handleShowComponent]);

  const date = ['month', 'year'];
  const datePlaceHolder = ['MM', 'YY'];

  const handleUpdateInput = (index: number, value: string) => {
    const cardKey = date[index] as keyof ExpirationDate;
    handleInput((prevState: ExpirationDate) => {
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
    const cardKey = date[index] as keyof ExpirationDate;
    handleInput((prevState: ExpirationDate) => {
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
    index: number
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateErrorMessages(index, '', false);
      handleUpdateInput(index, e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateErrorMessages(index, error.message, true);
      }
    }
    const nextIndex = index + 1;
    if (e.target.value.length === 2 && nextIndex < inputRefs.current.length) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const checkInputError = (index: number) => {
    const cardKey = date[index] as keyof ExpirationDate;
    return expirationDate[cardKey].isError;
  };
  return (
    <>
      <FieldTitle
        title='카드 유효기간을 입력해 주세요'
        subtitle='월/년도(MMYY)를 순서대로 입력해 주세요.'
      />
      <InputField
        label='유효기간'
        count={2}
        errorMessages={errorMessages}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={2}
            value={expirationDate[date[index] as keyof ExpirationDate].value}
            placeholder={datePlaceHolder[index]}
            isError={checkInputError(index)}
            onChange={(e) => handleInputChange(e, date[index], index)}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
