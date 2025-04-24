import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';
import { ExpirationDateType } from '../../PaymentInputPage';

export interface IsValidType {
  month: boolean;
  year: boolean;
}

export interface CardExpirationDateInputProps {
  expirationDate: ExpirationDateType;
  setExpirationDate: React.Dispatch<React.SetStateAction<ExpirationDateType>>;
  isValid: IsValidType;
  setIsValid: React.Dispatch<React.SetStateAction<IsValidType>>;
}

function CardExpirationDateInput({
  expirationDate,
  setExpirationDate,
  isValid,
  setIsValid,
}: CardExpirationDateInputProps) {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { name, value } = target;

    setExpirationDate({ ...expirationDate, [name]: value });
    checkIsValidExpiration(name, value);
    checkIsValidType(name, value);
  }

  function checkIsValidType(name: string, expiryValue: string) {
    if (!validatorUtils.isNumber(expiryValue)) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
      setIsValid((prev) => {
        return { ...prev, [name]: false };
      });
    }
  }

  function checkIsValidExpiration(name: string, value: string) {
    const { month, year } = expirationDate;
    if (
      month !== '' &&
      year !== '' &&
      !validatorUtils.isValidExpirationDate(expirationDate)
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid((prev) => {
        return { ...prev, [name]: false };
      });
      return;
    }

    if (
      name === 'month' &&
      value !== '' &&
      !validatorUtils.isValidNumberRange({
        value: Number(value),
        min: 1,
        max: 12,
      })
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid((prev) => {
        return { ...prev, [name]: false };
      });
      return;
    }

    if (
      name === 'year' &&
      value !== '' &&
      !validatorUtils.isValidNumberRange({ value: Number(value), min: 25 })
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid((prev) => {
        return { ...prev, [name]: false };
      });
      return;
    }

    setFeedbackMessage('');
    setIsValid((prev) => {
      return { ...prev, [name]: true };
    });
  }

  return (
    <>
      <InputForm
        feedbackMessage={feedbackMessage}
        title='카드 유효기간을 입력해 주세요.'
        description='월/년도(MMYY)를 순서대로 입력해 주세요.'
        label='유효기간'
      >
        <Input
          type='tel'
          name='month'
          placeholder='MM'
          value={expirationDate.month}
          handleInputChange={handleCardNumberChange}
          maxLength={2}
          isValidInput={isValid.month}
        />
        <Input
          type='tel'
          name='year'
          placeholder='YY'
          value={expirationDate.year}
          handleInputChange={handleCardNumberChange}
          maxLength={2}
          isValidInput={isValid.year}
        />
      </InputForm>
    </>
  );
}
export default CardExpirationDateInput;
