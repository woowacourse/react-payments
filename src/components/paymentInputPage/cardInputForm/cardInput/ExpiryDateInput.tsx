import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validate } from '../../../../utils/validate';
import useCardContext from '../../../../hooks/useCardContext';

export interface IsValidType {
  month: boolean;
  year: boolean;
}

export interface CardExpiryDateInputProps {
  isValid: IsValidType;
  setIsValid: React.Dispatch<React.SetStateAction<IsValidType>>;
}

function CardExpiryDateInput({
  isValid,
  setIsValid,
}: CardExpiryDateInputProps) {
  const { expiryDate, setExpiryDate } = useCardContext();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function checkIsValidExpiry(name: string, value: string) {
    const { month, year } = expiryDate;
    const targetMonth = name === 'month' ? value : month;
    const targetYear = name === 'year' ? value : year;
    const { isValid, message } = validate.checkExpiryDate(
      targetMonth,
      targetYear
    );

    setFeedbackMessage(message);
    setIsValid(isValid);
  }

  function handleMonthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setExpiryDate({ ...expiryDate, month: value });

    const validateResult = validate.checkExpiryMonth(value);
    if (!validateResult.isValid) {
      setIsValid((prev) => ({ ...prev, month: false }));
      setFeedbackMessage(validateResult.message);
      return;
    }

    checkIsValidExpiry('month', value);
  }

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setExpiryDate({ ...expiryDate, year: value });

    const validateResult = validate.checkNumberInput(value);
    if (!validateResult.isValid) {
      setIsValid((prev) => ({ ...prev, year: false }));
      setFeedbackMessage(validateResult.message);
      return;
    }

    checkIsValidExpiry('year', value);
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
          handleInputChange={handleMonthChange}
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
          handleInputChange={handleYearChange}
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
