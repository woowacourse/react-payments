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

  const datePlaceHolder = ['MM', 'YY'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    matchingKey: string,
    index: number
  ) => {
    try {
      Validation[matchingKey]?.(e.target.value);
      const nextIndex = index + 1;
      if (
        e.target.value.length === EXPIRATION_DATE.FIELD_LENGTH &&
        nextIndex < inputRefs.current.length
      ) {
        inputRefs.current[nextIndex]?.focus();
      }
      handleUpdateExpirationDateErrorMessages(index, '', false);
      handleUpdateExpirationDateInput(index, e.target.value);
      if (
        expirationDate.isNextField &&
        e.target.value.length !== EXPIRATION_DATE.FIELD_LENGTH
      ) {
        throw new Error('2자리의 숫자를 입력해주세요');
      }
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateExpirationDateErrorMessages(index, error.message, true);
      }
    }
  };

  const checkInputError = (
    matchingKey: keyof ExpirationDate['expirationDateFields']
  ) => expirationDate.expirationDateFields[matchingKey].isError;

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
        {Array.from({ length: 2 }).map((_, index) => {
          const matchingKey: keyof ExpirationDate['expirationDateFields'] =
            index === 0 ? 'month' : 'year';

          return (
            <Input
              key={index}
              type='string'
              maxLength={2}
              value={expirationDate.expirationDateFields[matchingKey].value}
              placeholder={datePlaceHolder[index]}
              isError={checkInputError(matchingKey)}
              onChange={(e) => handleInputChange(e, matchingKey, index)}
              inputRef={(element: HTMLInputElement) => {
                inputRefs.current[index] = element;
              }}
            />
          );
        })}
      </InputField>
    </>
  );
}
