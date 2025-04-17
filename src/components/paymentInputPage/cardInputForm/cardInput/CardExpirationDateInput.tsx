import { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';

const numbersArray = Array.from({ length: 2 }).fill('') as string[];
function CardExpirationDateInput({
  setExpirationDate,
}: {
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}) {
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsValid: (state: boolean) => void,
    index: number
  ) {
    const expirationDate = e.target.value;
    if (!validatorUtils.isNumber(expirationDate)) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
      setIsValid(false);
      return;
    }
    numbersArray[index] = expirationDate;
    setExpirationDate([...numbersArray]);
    if (
      (index === 0 &&
        !validatorUtils.isValidNumberRange(Number(expirationDate), 1, 12)) ||
      !validatorUtils.isValidExpirationDate(numbersArray[0], numbersArray[1])
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid(false);
      return;
    }
    if (
      index === 1 &&
      !validatorUtils.isValidExpirationDate(numbersArray[0], numbersArray[1])
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      setIsValid(false);
      return;
    }

    setFeedbackMessage('');
    setIsValid(true);
  }

  const inputs = Array.from({ length: 2 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardExpirationDate'
        placeholder={index === 0 ? 'MM' : 'YY'}
        onChange={(e, setIsValid) => onChangeHandler(e, setIsValid, index)}
        maxLength={2}
      />
    );
  });

  return (
    <>
      <InputForm
        feedbackMessage={feedbackMessage}
        title='카드 유효기간을 입력해 주세요.'
        description='월/년도(MMYY)를 순서대로 입력해 주세요.'
        label='유효기간'
      >
        {inputs}
      </InputForm>
    </>
  );
}
export default CardExpirationDateInput;
