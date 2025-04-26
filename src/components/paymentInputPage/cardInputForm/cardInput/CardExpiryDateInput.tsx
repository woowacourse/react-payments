import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';
import { ExpiryDateType } from '../../PaymentInputPage';

export interface IsValidType {
  month: boolean;
  year: boolean;
}

export interface CardExpiryDateInputProps {
  expiryDate: ExpiryDateType;
  setExpiryDate: React.Dispatch<React.SetStateAction<ExpiryDateType>>;
  isValid: IsValidType;
  setIsValid: React.Dispatch<React.SetStateAction<IsValidType>>;
}

function CardExpiryDateInput({
  expiryDate,
  setExpiryDate,
  isValid,
  setIsValid,
}: CardExpiryDateInputProps) {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { name, value } = target;

    setExpiryDate({ ...expiryDate, [name]: value });
    checkIsValidExpiry(name, value);
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

  function checkIsValidExpiry(name: string, value: string) {
    const { month, year } = expiryDate;
    if (
      name === 'month' &&
      value.length === 2 &&
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
      value.length === 2 &&
      !validatorUtils.isValidNumberRange({ value: Number(value), min: 25 })
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid((prev) => {
        return { ...prev, [name]: false };
      });
      return;
    }

    if (
      month.length === 2 &&
      year.length === 2 &&
      !validatorUtils.isValidExpiryDate(expiryDate)
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
          value={expiryDate.month}
          handleInputChange={handleCardNumberChange}
          minLength={2}
          maxLength={2}
          autoFocus={true}
          isRequired={true}
          isValidInput={isValid.month}
        />
        <Input
          type='tel'
          name='year'
          placeholder='YY'
          value={expiryDate.year}
          handleInputChange={handleCardNumberChange}
          minLength={2}
          maxLength={2}
          isRequired={true}
          isValidInput={isValid.year}
        />
      </InputForm>
    </>
  );
}
export default CardExpiryDateInput;
