import { useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import type { CardItemInfo } from '../../types/Card';

interface CardNumberInputProps {
  cardNumber: CardItemInfo['cardNumber'];
  setCardNumber: (cardNumber: CardItemInfo['cardNumber']) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const CardNumberInput = ({
  cardNumber,
  setCardNumber,
  errorMessage,
  setErrorMessage,
}: CardNumberInputProps) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue)) return;

      if (isNotInputNumber(inputValue)) {
        setErrorMessage('숫자만 입력해주세요');
        return;
      }

      if (isNextInputFocusable(inputValue, inputIndex))
        refs[inputIndex + 1].current?.focus();

      const newCardNumber = [...cardNumber];
      newCardNumber[inputIndex] = inputValue;

      setCardNumber(newCardNumber);
      setErrorMessage('');
    };

  const isNotInputNumber = (inputValue: string) => {
    const regex = /^\d{0,4}$/;
    return !regex.test(inputValue);
  };

  const isOverLength = (inputValue: string) => {
    return inputValue.length > 4;
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length > 3 && inputIndex < 3;
  };

  return (
    <InputGroup labelValue='카드 번호' errorMessage={errorMessage}>
      <InputBox isError={!!errorMessage}>
        {[0, 1, 2, 3].map((index) => (
          <>
            <Input
              ref={refs[index]}
              value={cardNumber[index]}
              type={index >= 2 ? 'password' : undefined}
              onChange={handleChangeInput(index)}
            />
            {index < 3 && (
              <InputSeparator isActive={cardNumber[index].length === 4}>
                -
              </InputSeparator>
            )}
          </>
        ))}
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
