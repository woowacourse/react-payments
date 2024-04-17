import { useState } from 'react';
import TitleContainer from './TitleContainer';
import InputField from './InputField';
import Input from './Input';

interface CardExpirationInputProps {
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

function CardExpirationInput({ setMonth, setYear }: CardExpirationInputProps) {
  const [isValidMonth, setIsValidMonth] = useState<boolean>(true);
  const [isValidYear, setIsValidYear] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateMonth = (month: string) => {
    if (Number.isNaN(Number(month)) || month.length !== 2) {
      setErrorMessage('유효기간의 월은 두 자리 숫자로 입력해 주세요.');
      return false;
    }

    if (Number(month) < 1 || Number(month) > 12) {
      setErrorMessage('유효기간의 월은 01~12 사이의 숫자로 입력해 주세요.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const validateYear = (year: string) => {
    if (Number.isNaN(Number(year)) || year.length !== 2) {
      setErrorMessage('유효기간의 년도는 두 자리 숫자로 입력해 주세요.');
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
      <InputField label="유효기간" length={2} errorMessage={errorMessage}>
        <Input
          type="text"
          placeholder="MM"
          maxLength={2}
          onChange={onMonthChange}
          onBlur={onMonthBlur}
          isValid={isValidMonth}
        />
        <Input
          type="text"
          placeholder="YY"
          maxLength={2}
          onChange={onYearChange}
          onBlur={onYearBlur}
          isValid={isValidYear}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
