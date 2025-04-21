import { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';
import { ExpirationDateType } from '../../PaymentInputPage';

function CardExpirationDateInput({
  expirationDate,
  setExpirationDate,
}: {
  expirationDate: ExpirationDateType;
  setExpirationDate: Dispatch<SetStateAction<ExpirationDateType>>;
}) {
  const [isValidInputs, setIsValidInputs] = useState({
    month: true,
    year: true,
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { name, value } = target;

    if (!validatorUtils.isNumber(value)) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
      setIsValidInputs({ ...isValidInputs, [name]: false });
      setExpirationDate({ ...expirationDate, [name]: value });

      return;
    }

    if (
      (name === 'month' &&
        !validatorUtils.isValidNumberRange(Number(expirationDate), 1, 12)) ||
      !validatorUtils.isValidExpirationDate(expirationDate)
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValidInputs({ ...isValidInputs, [name]: false });
      return;
    }
    if (
      name === 'year' &&
      !validatorUtils.isValidExpirationDate(expirationDate)
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValidInputs({ ...isValidInputs, [name]: false });
      return;
    }

    setFeedbackMessage('');
    setIsValidInputs({ ...isValidInputs, [name]: true });
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
          isValidInput={isValidInputs.month}
        />
        <Input
          type='tel'
          name='year'
          placeholder='YY'
          value={expirationDate.year}
          handleInputChange={handleCardNumberChange}
          maxLength={2}
          isValidInput={isValidInputs.year}
        />
      </InputForm>
    </>
  );
}
export default CardExpirationDateInput;
