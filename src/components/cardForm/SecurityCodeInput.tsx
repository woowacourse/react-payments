import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { Card } from '../../types/Card';

interface SecurityCodeInputProps {
  securityCode: Card['securityCode'];
  setSecurityCode: (securityCode: Card['securityCode']) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const SecurityCodeInput = ({
  securityCode,
  setSecurityCode,
  errorMessage,
  setErrorMessage,
}: SecurityCodeInputProps) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverLength(inputValue)) return;

    if (isNotInputNumber(inputValue)) {
      setErrorMessage('숫자만 입력해주세요');
      return;
    }

    setSecurityCode(inputValue.toUpperCase());
    setErrorMessage('');
  };

  const isNotInputNumber = (inputValue: string) => {
    const regex = /^\d{0,3}$/;
    return !regex.test(inputValue);
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
