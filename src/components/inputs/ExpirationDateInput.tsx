import { useEffect, useRef, useState } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

const ExpirationDateInput = () => {
  const [inputs, setInputs] = useState(['', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (!inputs[0].length && !inputs[1].length) return;

    if (inputs[0].length < 2 || inputs[1].length < 2) {
      setErrorMessage('만료일은 MM/YY 형식으로 입력해주세요');
      return;
    }

    if (inputs[0].length === 2 && !isValidMonth(inputs[0])) {
      setErrorMessage('유효한 달을 입력해주세요');
      return;
    }

    setErrorMessage('');
  }, [inputs]);

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isNotInputNumber(inputValue)) {
        setErrorMessage('숫자만 입력해주세요');
        return;
      }
      if (isOverLength(inputValue)) return;

      const newInputs = [...inputs];
      newInputs[inputIndex] = inputValue;

      setInputs(newInputs);

      if (isNextInputFocusable(inputValue, inputIndex)) {
        refs[inputIndex + 1].current?.focus();
      }
    };

  const isValidMonth = (monthValue: string) => {
    return Number(monthValue) <= 12 && Number(monthValue) >= 1;
  };

  const isNotInputNumber = (inputValue: string) => {
    return Number.isNaN(Number(inputValue));
  };

  const isOverLength = (inputValue: string) => {
    return inputValue.length > 2;
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length > 1 && inputIndex < 1;
  };

  return (
    <InputGroup labelValue='만료일' errorMessage={errorMessage}>
      <InputBox width='137px' isError={!!errorMessage}>
        <Input
          placeholder='MM'
          ref={refs[0]}
          value={inputs[0]}
          onChange={handleChangeInput(0)}
        />
        <InputSeparator color='#737373' isActive>
          /
        </InputSeparator>
        <Input
          placeholder='YY'
          ref={refs[1]}
          value={inputs[1]}
          onChange={handleChangeInput(1)}
        />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
