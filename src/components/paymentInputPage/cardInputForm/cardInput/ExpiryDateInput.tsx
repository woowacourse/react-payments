import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validate } from '../../../../utils/validate';
import useCardContext from '../../../../hooks/useCardContext';

export interface IsValidType {
  month: boolean;
  year: boolean;
}

export interface ExpiryDateInputProps {
  isValid: IsValidType;
  setIsValid: React.Dispatch<React.SetStateAction<IsValidType>>;
}

function ExpiryDateInput({ isValid, setIsValid }: ExpiryDateInputProps) {
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
    setIsValid({ month: isValid, year: isValid });
  }

  function handleMonthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setExpiryDate((prev) => ({ ...prev, month: value }));

    const { isValid, message } = validate.checkExpiryMonth(value);
    setIsValid((prev) => ({ ...prev, month: isValid }));
    setFeedbackMessage(message);

    if (isValid) {
      checkIsValidExpiry('month', value);
    }
  }

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setExpiryDate((prev) => ({ ...prev, year: value }));

    const { isValid, message } = validate.checkNumberInput(value);
    setIsValid((prev) => ({ ...prev, year: isValid }));
    setFeedbackMessage(message);

    if (isValid) {
      checkIsValidExpiry('year', value);
    }
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

export default ExpiryDateInput;
