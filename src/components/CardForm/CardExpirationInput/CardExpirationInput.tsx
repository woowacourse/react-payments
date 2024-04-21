import { useState, useMemo } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber, isValidLength, isValidRange } from '../../../utils/validation';
import { CARD_EXPIRATION } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardExpirationInputProps {
  handleMonth: (month: string) => void;
  handleYear: (year: string) => void;
}

function CardExpirationInput({ handleMonth, handleYear }: CardExpirationInputProps) {
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const errorMessage = useMemo(() => {
    if (!isValidMonth) return ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_LENGTH;
    if (!isValidYear) return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR_LENGTH;
    return '';
  }, [isValidMonth, isValidYear]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    handleMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    handleYear(e.target.value);
  };

  const handleMonthBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValidMonth =
      isValidRange(Number(e.target.value), CARD_EXPIRATION.MIN_MONTH_RANGE, CARD_EXPIRATION.MAX_MONTH_RANGE) &&
      isValidLength(e.target.value, 2);

    setIsValidMonth(newIsValidMonth);

    if (!newIsValidMonth) {
      handleMonth('');
    }
  };

  const handleYearBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValidYear = isValidLength(e.target.value, 2);

    setIsValidYear(newIsValidYear);

    if (!newIsValidYear) {
      handleYear('');
    }
  };

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField label="유효기간" length={CARD_EXPIRATION.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          placeholder="MM"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleMonthChange}
          onBlur={handleMonthBlur}
          isValid={isValidMonth}
        />
        <Input
          type="text"
          placeholder="YY"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleYearChange}
          onBlur={handleYearBlur}
          isValid={isValidYear}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
