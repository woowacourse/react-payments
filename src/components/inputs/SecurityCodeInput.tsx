import { useState } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';

const SecurityCodeInput = () => {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isNotInputNumber(inputValue)) {
      setErrorMessage('숫자만 입력해주세요');
      return;
    }
    if (isOverLength(inputValue)) return;

    setInput(inputValue.toUpperCase());
    setErrorMessage('');
  };

  const isNotInputNumber = (inputValue: string) => {
    return Number.isNaN(Number(inputValue));
  };

  const isOverLength = (inputValue: string) => {
    return inputValue.length > 3;
  };

  return (
    <InputGroup labelValue={'보안 코드(CVC/CVV)'} errorMessage={errorMessage}>
      <InputBox width='100px' isError={!!errorMessage}>
        <Input type='password' value={input} onChange={handleChangeInput} />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
