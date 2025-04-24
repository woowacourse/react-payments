import { useState } from 'react';
import InputForm from '../../../common/inputForm/InputForm';
import Input from '../../../common/inputForm/input/Input';
import { validatorUtils } from '../../../../utils/validationUtils';

export interface CardNumberInputProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  isValid: boolean[];
  setIsValid: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function CardNumberInput({
  cardNumbers,
  setCardNumbers,
  isValid,
  setIsValid,
}: CardNumberInputProps) {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;
    const dataInputId = Number(target.dataset.inputId);

    updateCardNumber(value, dataInputId);
    validateCardNumber(value, dataInputId);
    decideShowFeedback();
  }

  function updateCardNumber(inputCardNumber: string, dataInputId: number) {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[dataInputId] = inputCardNumber;

    setCardNumbers(newCardNumbers);
  }

  function validateCardNumber(inputCardNumber: string, dataInputId: number) {
    if (!validatorUtils.isNumber(inputCardNumber)) {
      isValid[dataInputId] = false;
      setIsValid([...isValid]);
    } else {
      isValid[dataInputId] = true;
      setIsValid([...isValid]);
    }
  }

  function decideShowFeedback() {
    const hasInvalidInput = isValid.some((isValidInput) => !isValidInput);
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
        isValidInput={isValid[index]}
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
