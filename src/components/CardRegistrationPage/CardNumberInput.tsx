import { useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

interface CardNumberInputProps {
  cardNumber: string[];
  setCardNumber: (cardNumber: string[]) => void;
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
        <Input
          ref={refs[0]}
          value={cardNumber[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator isActive={cardNumber[0].length === 4}>-</InputSeparator>
        <Input
          ref={refs[1]}
          value={cardNumber[1]}
          onChange={handleChangeInput(1)}
        />
        <InputSeparator isActive={cardNumber[1].length === 4}>-</InputSeparator>
        <Input
          ref={refs[2]}
          value={cardNumber[2]}
          type='password'
          onChange={handleChangeInput(2)}
        />
        <InputSeparator isActive={cardNumber[2].length === 4}>-</InputSeparator>
        <Input
          ref={refs[3]}
          value={cardNumber[3]}
          type='password'
          onChange={handleChangeInput(3)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
