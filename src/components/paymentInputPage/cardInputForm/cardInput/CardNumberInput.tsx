import { Dispatch, SetStateAction, useState } from 'react';
import InputForm from '../../../common/inputForm/InputForm';
import Input from '../../../common/inputForm/input/Input';
import { validatorUtils } from '../../../../utils/validationUtils';

const numbersArray = Array.from({ length: 4 }).fill('') as string[];

function CardNumberInput({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  const initialValidInputs = Array.from({ length: 4 }, () => true);
  const [isValidInputs, setIsValidInputs] =
    useState<boolean[]>(initialValidInputs);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;
    const dataInputId = Number(target.dataset.inputId);

    updateCarNumber(value, dataInputId);
    validateCardNumber(value, dataInputId);
    decideShowFeedback();
  }

  function updateCarNumber(inputCardNumber: string, dataInputId: number) {
    numbersArray[dataInputId] = inputCardNumber;
    setCardNumbers([...numbersArray]);
  }

  function validateCardNumber(inputCardNumber: string, dataInputId: number) {
    if (!validatorUtils.isNumber(inputCardNumber)) {
      isValidInputs[dataInputId] = false;
      setIsValidInputs([...isValidInputs]);
    } else {
      isValidInputs[dataInputId] = true;
      setIsValidInputs([...isValidInputs]);
    }
  }

  function decideShowFeedback() {
    const hasInvalidInput = isValidInputs.some((isValid) => !isValid);
    if (hasInvalidInput) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
    } else {
      setFeedbackMessage('');
    }
  }

  const inputs = Array.from({ length: 4 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardNumber'
        placeholder='1234'
        maxLength={4}
        value={cardNumbers[index]}
        handleInputChange={handleCardNumberChange}
        isValidInput={isValidInputs[index]}
        dataInputId={index}
      />
    );
  });

  return (
    <>
      <InputForm
        feedbackMessage={feedbackMessage}
        title='결제할 카드 번호를 입력해주세요.'
        description='본인 명의의 카드만 결제 가능합니다.'
        label='카드 번호'
      >
        {inputs}
      </InputForm>
    </>
  );
}

export default CardNumberInput;
