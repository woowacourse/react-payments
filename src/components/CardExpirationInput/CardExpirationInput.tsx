import { useState } from 'react';

import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import useInputAutoFocus from '../../hooks/useInputAutoFocus';

import { CARD_EXPIRATION } from '../../constants/conditions';

interface CardExpirationInputProps {
  isMonthValid: { isValid: boolean; errorMessage: string };
  isYearValid: { isValid: boolean; errorMessage: string };
  onChangeExpireDate: (month: string, year: string) => void;
}

export default function CardExpirationInput({
  isMonthValid,
  isYearValid,
  onChangeExpireDate,
}: CardExpirationInputProps) {
  const [expireDate, setExpireDate] = useState({ month: '', year: '' });
  const { setInputRef, focusNextInput } = useInputAutoFocus(CARD_EXPIRATION.INPUT_FIELD_COUNT);

  const errorMessage = () => {
    if (isMonthValid.errorMessage !== '') return isMonthValid.errorMessage;
    if (isYearValid.errorMessage !== '') return isYearValid.errorMessage;
    return '';
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(CARD_EXPIRATION.INVALID_CHARS_REGEX, '');
    setExpireDate((prevState) => {
      return { ...prevState, month: event.target.value };
    });
    onChangeExpireDate(event.target.value, expireDate.year);

    if (event.target.value.length === CARD_EXPIRATION.MAX_LENGTH) {
      focusNextInput();
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(CARD_EXPIRATION.INVALID_CHARS_REGEX, '');
    setExpireDate((prevState) => {
      return { ...prevState, year: event.target.value };
    });
    onChangeExpireDate(expireDate.month, event.target.value);
  };

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField label="유효기간" length={CARD_EXPIRATION.INPUT_FIELD_COUNT} errorMessage={errorMessage()}>
        <Input
          ref={setInputRef(0)}
          type="text"
          placeholder="MM"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleMonthChange}
          isValid={isMonthValid.isValid}
          autoFocus
        />
        <Input
          ref={setInputRef(1)}
          type="text"
          placeholder="YY"
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleYearChange}
          isValid={isYearValid.isValid}
        />
      </InputField>
    </div>
  );
}
