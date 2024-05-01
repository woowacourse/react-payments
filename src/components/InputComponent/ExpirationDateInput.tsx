import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { ExpirationDate } from '../../types/card';
import { EXPIRATION_DATE } from '../../constants/system';

interface Props {
  expirationDate: ExpirationDate;
  handleInput: {
    handleUpdateExpirationDateInput: (index: number, value: string) => void;
    handleUpdateExpirationDateErrorMessages: (
      index: number,
      errorMessage: string,
      isError: boolean
    ) => void;
  };
}
export default function ExpirationDateInput({
  expirationDate,
  handleInput: {
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
  },
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);
  const errorMessages = Object.values(expirationDate.expirationDateFields).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const date = ['month', 'year'];
  const datePlaceHolder = ['MM', 'YY'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string,
    index: number
  ) => {
    try {
      Validation[info]?.(e.target.value);
      const nextIndex = index + 1;
      if (
        e.target.value.length === EXPIRATION_DATE.FIELD_LENGTH &&
        nextIndex < inputRefs.current.length
      ) {
        inputRefs.current[nextIndex]?.focus();
      }
      handleUpdateExpirationDateErrorMessages(index, '', false);
      handleUpdateExpirationDateInput(index, e.target.value);
      if(e.target.value.length !== EXPIRATION_DATE.FIELD_LENGTH){
        throw new Error('2자리의 숫자를 입력해주세요');
      }
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateExpirationDateErrorMessages(index, error.message, true);
      }
    }
  };

  const checkInputError = (index: number) => {
    const cardKey = Object.keys(expirationDate.expirationDateFields)[
      index
    ] as keyof typeof expirationDate.expirationDateFields;
    return expirationDate.expirationDateFields[cardKey].isError;
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
            value={
              expirationDate.expirationDateFields[
                date[index] as keyof typeof expirationDate.expirationDateFields
              ].value
            }
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
