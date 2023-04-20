import { useState } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';

interface SecurityCodeInputProps {
  securityCode: string;
  setSecurityCode: (securityCode: string) => void;
}

const SecurityCodeInput = ({
  securityCode,
  setSecurityCode,
}: SecurityCodeInputProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isNotInputNumber(inputValue)) {
      setErrorMessage('숫자만 입력해주세요');
      return;
    }
    if (isOverLength(inputValue)) return;

    setSecurityCode(inputValue.toUpperCase());
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
        <Input
          type='password'
          value={securityCode}
          onChange={handleChangeInput}
        />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
