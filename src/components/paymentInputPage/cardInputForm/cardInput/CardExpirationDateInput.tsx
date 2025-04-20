import { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';

const numbersArray = Array.from({ length: 2 }).fill('') as string[];
function CardExpirationDateInput({
  expirationDate,
  setExpirationDate,
}: {
  expirationDate: string[];
  setExpirationDate: Dispatch<SetStateAction<string[]>>;
}) {
  const initialValidInputs = Array.from({ length: 4 }, () => true);
  const [isValidInputs, setIsValidInputs] =
    useState<boolean[]>(initialValidInputs);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const expirationDate = e.target.value;
    const dataInputId = Number(target.dataset.inputId);

    if (!validatorUtils.isNumber(expirationDate)) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
      isValidInputs[dataInputId] = false;
      setIsValidInputs([...isValidInputs]);

      return;
    }
    numbersArray[dataInputId] = expirationDate;
    setExpirationDate([...numbersArray]);
    if (
      (dataInputId === 0 &&
        !validatorUtils.isValidNumberRange(Number(expirationDate), 1, 12)) ||
      !validatorUtils.isValidExpirationDate(numbersArray[0], numbersArray[1])
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      isValidInputs[dataInputId] = false;
      setIsValidInputs([...isValidInputs]);
      return;
    }
    if (
      dataInputId === 1 &&
      !validatorUtils.isValidExpirationDate(numbersArray[0], numbersArray[1])
    ) {
      setFeedbackMessage('유효하지 않은 카드입니다. 유효 기간을 확인해주세요.');
      isValidInputs[dataInputId] = false;
      setIsValidInputs([...isValidInputs]);
      return;
    }

    setFeedbackMessage('');
    isValidInputs[dataInputId] = true;
    setIsValidInputs([...isValidInputs]);
  }

  const inputs = Array.from({ length: 2 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardExpirationDate'
        placeholder={index === 0 ? 'MM' : 'YY'}
        value={expirationDate[index]}
        handleInputChange={handleCardNumberChange}
        maxLength={2}
        isValidInput={isValidInputs[index]}
        dataInputId={index}
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
