import { useState } from 'react';
import TitleContainer from './TitleContainer';
import InputField from './InputField';
import Input from './Input';

import { CARD_EXPIRATION } from '../constants/Condition';
import { ERROR_MESSAGE } from '../constants/Message';

interface CardExpirationInputProps {
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

function CardExpirationInput({ setMonth, setYear }: CardExpirationInputProps) {
  const [isValidMonth, setIsValidMonth] = useState<boolean>(true);
  const [isValidYear, setIsValidYear] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateMonth = (month: string) => {
    if (Number.isNaN(Number(month)) || month.length !== CARD_EXPIRATION.MAX_LENGTH) {
      setErrorMessage(ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH);
      return false;
    }

    if (Number(month) < CARD_EXPIRATION.MIN_MONTH_RANGE || Number(month) > CARD_EXPIRATION.MAX_MONTH_RANGE) {
      setErrorMessage(ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_RANGE);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const validateYear = (year: string) => {
    if (Number.isNaN(Number(year)) || year.length !== CARD_EXPIRATION.MAX_LENGTH) {
      setErrorMessage(ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateMonth(e.target.value)) {
      setIsValidMonth(false);
      setMonth('');
      return;
    }

    setIsValidMonth(true);
    setMonth(e.target.value);
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateYear(e.target.value)) {
      setIsValidYear(false);
      setYear('');
      return;
    }

    setIsValidYear(true);
    setYear(e.target.value);
  };

  const onMonthBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidMonth) {
      e.target.value = '';
      setErrorMessage('');
    }

    setIsValidMonth(true);
  };

  const onYearBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidYear) {
      e.target.value = '';
      setErrorMessage('');
    }

    setIsValidYear(true);
  };

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField label="유효기간" length={CARD_EXPIRATION.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          placeholder="MM"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={onMonthChange}
          onBlur={onMonthBlur}
          isValid={isValidMonth}
        />
        <Input
          type="text"
          placeholder="YY"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={onYearChange}
          onBlur={onYearBlur}
          isValid={isValidYear}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
