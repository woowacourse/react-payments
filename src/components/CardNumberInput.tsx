import { useState } from 'react';
import TitleContainer from './TitleContainer';
import InputField from './InputField';
import Input from './Input';

interface CardNumberInputProps {
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
}

function CardNumberInput({ setCardNumber }: CardNumberInputProps) {
  const [isValid, setIsValid] = useState<boolean[]>([true, true, true, true]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateCardNumber = (number: string) => {
    if (Number.isNaN(Number(number)) || number.length !== 4) {
      setErrorMessage('카드 번호는 4자리 숫자여야 합니다.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const onCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValid = validateCardNumber(e.target.value);

    setIsValid((prev) => {
      return prev.map((isValid, index) => (index === inputIndex ? isInputValid : isValid));
    });

    setCardNumber((prev) => {
      return prev.map((number, index) => {
        if (index === inputIndex) {
          return isInputValid ? e.target.value : '';
        }

        return number;
      });
    });
  };

  const onCardNumberBlur = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValid[inputIndex]) {
      e.target.value = '';
      setErrorMessage('');
    }

    setIsValid((prev) => {
      return prev.map((isValid, index) => (index === inputIndex ? true : isValid));
    });
  };

  return (
    <div>
      <TitleContainer title="결제할 카드 번호를 입력해 주세요." subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField label="카드 번호" length={4} errorMessage={errorMessage}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={index}
            type="text"
            maxLength={4}
            placeholder="1234"
            onChange={onCardNumberChange(index)}
            onBlur={onCardNumberBlur(index)}
            isValid={isValid[index]}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
