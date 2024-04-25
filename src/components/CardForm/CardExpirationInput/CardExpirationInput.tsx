import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useInput from '../../../hooks/useInput';
import useAutoFocus from '../../../hooks/useAutoFocus';

import { isNumber } from '../../../utils/validation';
import { CARD_EXPIRATION } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardExpirationInputProps {
  month: string;
  year: string;
  isValid: [boolean, boolean];
  handleMonth: (month: string) => void;
  handleYear: (year: string) => void;
}

function CardExpirationInput({ month, year, isValid, handleMonth, handleYear }: CardExpirationInputProps) {
  const [isMonthClicked, setIsMonthClicked] = useState(false);
  const [isYearClicked, setIsYearClicked] = useState(false);

  const { value: monthInput, onChange: onMonthInputChange } = useInput(month);
  const { value: yearInput, onChange: onYearInputChange } = useInput(year);
  const { setRef, moveToNextInput } = useAutoFocus(CARD_EXPIRATION.INPUT_FIELD_COUNT, CARD_EXPIRATION.MAX_LENGTH);

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (!isMonthClicked) setIsMonthClicked(true);

    onMonthInputChange(e);
    handleMonth(e.target.value);

    moveToNextInput(e.target.value, 0);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (!isYearClicked) setIsYearClicked(true);

    onYearInputChange(e);
    handleYear(e.target.value);
  };

  const errorMessage = isValid.every(Boolean)
    ? ''
    : isValid[0]
      ? ERROR_MESSAGE.INVALID_EXPIRATION_YEAR
      : ERROR_MESSAGE.INVALID_EXPIRATION_MONTH;

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField
        label="유효기간"
        inputCount={CARD_EXPIRATION.INPUT_FIELD_COUNT}
        errorMessage={isMonthClicked || isYearClicked ? errorMessage : ''}
      >
        <Input
          type="text"
          ref={setRef(0)}
          placeholder="MM"
          value={monthInput}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleMonthChange}
          isValid={isMonthClicked ? isValid[0] : true}
          autoFocus
        />
        <Input
          type="text"
          ref={setRef(1)}
          placeholder="YY"
          value={yearInput}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleYearChange}
          isValid={isYearClicked ? isValid[1] : true}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
