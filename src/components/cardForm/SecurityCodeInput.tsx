import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputNumber, isOverLength } from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { Card } from '../../types/Card';

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

    if (isOverLength(inputValue, INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH)) return;
    if (isInputNumber(inputValue, INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
      return;
    }

    setSecurityCode(inputValue.toUpperCase());
    setErrorMessage('');
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
