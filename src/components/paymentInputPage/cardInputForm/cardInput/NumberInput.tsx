import { useState } from 'react';
import InputForm from '../../../common/inputForm/InputForm';
import Input from '../../../common/inputForm/input/Input';
import useCardContext from '../../../../hooks/useCardContext';
import { validate } from '../../../../utils/validate';

export interface NumberInputProps {
  isCardNumberValid: boolean[];
  setIsCardNumberValid: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function NumberInput({
  isCardNumberValid,
  setIsCardNumberValid,
}: NumberInputProps) {
  const { cardNumbers, setCardNumbers } = useCardContext();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;
    const dataInputId = Number(target.dataset.inputId);

    updateCardNumber(value, dataInputId);
    validateCardNumber(value, dataInputId);
  }

  function updateCardNumber(inputCardNumber: string, dataInputId: number) {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[dataInputId] = inputCardNumber;

    setCardNumbers(newCardNumbers);
  }

  function validateCardNumber(inputCardNumber: string, dataInputId: number) {
    const { isValid, message } = validate.checkNumberInput(inputCardNumber);
    isCardNumberValid[dataInputId] = isValid;
    setIsCardNumberValid([...isCardNumberValid]);
    setFeedbackMessage(message);
  }

  const inputs = Array.from({ length: 4 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardNumber'
        placeholder='1234'
        minLength={4}
        maxLength={4}
        value={cardNumbers[index]}
        handleInputChange={handleCardNumberChange}
        isValidInput={isCardNumberValid[index]}
        autoFocus={index === 0}
        isRequired={true}
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

export default NumberInput;
