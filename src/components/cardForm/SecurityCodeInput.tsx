import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputNumber, isOverLength } from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { Card, InputProps } from '../../types/Card';

type SecurityCodeInputProps = InputProps<Card['securityCode']>;

const SecurityCodeInput = ({
  value,
  setValue,
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

    setValue(inputValue.toUpperCase());
    setErrorMessage('');
  };

  return (
    <InputGroup labelValue={'보안 코드(CVC/CVV)'} errorMessage={errorMessage}>
      <InputBox width='100px' isError={!!errorMessage}>
        <Input type='password' value={value} onChange={handleChangeInput} />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
