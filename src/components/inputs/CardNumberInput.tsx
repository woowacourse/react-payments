import { useRef, useState } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

const CardNumberInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isNotInputNumber(inputValue)) {
        setErrorMessage('숫자만 입력해주세요');
        return;
      }
      if (isOverLength(inputValue)) return;
      if (isNextInputFocusable(inputValue, inputIndex))
        refs[inputIndex + 1].current?.focus();

      const newInputs = [...inputs];
      newInputs[inputIndex] = inputValue;

      setInputs(newInputs);
      setErrorMessage('');
    };

  const isNotInputNumber = (inputValue: string) => {
    return Number.isNaN(Number(inputValue));
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
          value={inputs[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator isActive={inputs[0].length === 4}>-</InputSeparator>
        <Input
          ref={refs[1]}
          value={inputs[1]}
          onChange={handleChangeInput(1)}
        />
        <InputSeparator isActive={inputs[1].length === 4}>-</InputSeparator>
        <Input
          ref={refs[2]}
          value={inputs[2]}
          type='password'
          onChange={handleChangeInput(2)}
        />
        <InputSeparator isActive={inputs[2].length === 4}>-</InputSeparator>
        <Input
          ref={refs[3]}
          value={inputs[3]}
          type='password'
          onChange={handleChangeInput(3)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
