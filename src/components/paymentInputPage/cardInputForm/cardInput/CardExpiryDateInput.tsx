import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { ExpiryDateType } from '../../PaymentInputPage';
import { validate } from '../../../../utils/validate';

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
    checkIsValidType(name, value);
    checkIsValidExpiry(name, value);
  }

  function checkIsValidType(name: string, value: string) {
    const { isValid, message } = validate.checkNumberInput(value);

    setFeedbackMessage(message);
    setIsValid((prev) => ({ ...prev, [name]: isValid }));
  }

  function checkIsValidExpiry(name: string, value: string) {
    const { month, year } = expiryDate;
    const targetMonth = name === 'month' ? value : month;
    const targetYear = name === 'year' ? value : year;
    const { isValid, message } = validate.checkExpiryDate(
      targetMonth,
      targetYear
    );

    setFeedbackMessage(message);
    setIsValid((prev) => ({
      ...prev,
      [name]: isValid,
    }));
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
