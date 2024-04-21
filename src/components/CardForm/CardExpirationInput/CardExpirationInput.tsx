import { useState, useMemo } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { CARD_EXPIRATION } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardExpirationInputProps {
  handleMonth: (month: string) => void;
  handleYear: (year: string) => void;
}

function CardExpirationInput({ handleMonth, handleYear }: CardExpirationInputProps) {
  const [isValidMonth, setIsValidMonth] = useState<boolean>(true);
  const [isValidYear, setIsValidYear] = useState<boolean>(true);

  const errorMessage = useMemo(() => {
    if (!isValidMonth) return ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH;
    if (!isValidYear) return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH;
    return '';
  }, [isValidMonth, isValidYear]);

  const validateMonth = (month: string) => {
    if (Number.isNaN(Number(month)) || month.length !== CARD_EXPIRATION.MAX_LENGTH) {
      return false;
    }

    if (Number(month) < CARD_EXPIRATION.MIN_MONTH_RANGE || Number(month) > CARD_EXPIRATION.MAX_MONTH_RANGE) {
      return false;
    }

    return true;
  };

  const validateYear = (year: string) => {
    return !Number.isNaN(Number(year)) && year.length === CARD_EXPIRATION.MAX_LENGTH;
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValidMonth = validateMonth(e.target.value);

    setIsValidMonth(newIsValidMonth);
    handleMonth(newIsValidMonth ? e.target.value : '');
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValidYear = validateYear(e.target.value);

    setIsValidYear(newIsValidYear);
    handleYear(newIsValidYear ? e.target.value : '');
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
          isValid={isValidMonth}
        />
        <Input
          type="text"
          placeholder="YY"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={onYearChange}
          isValid={isValidYear}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
