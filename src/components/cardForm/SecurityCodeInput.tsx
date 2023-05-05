import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputNumber, isOverLength } from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import { useContext } from 'react';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';

const SecurityCodeInput = () => {
  const { securityCode, setSecurityCode } = useContext(CardFormValueContext);
  const { securityCodeError, setSecurityCodeError } = useContext(
    CardFormErrorValueContext
  );

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverLength(inputValue, INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH)) return;
    if (isInputNumber(inputValue, INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH)) {
      setSecurityCodeError(ERROR_MESSAGE.ONLY_NUMBER);
      return;
    }

    setSecurityCode(inputValue.toUpperCase());
    setSecurityCodeError('');
  };

  return (
    <InputGroup
      labelValue={'보안 코드(CVC/CVV)'}
      errorMessage={securityCodeError}
    >
      <InputBox width='100px' isError={!!securityCodeError}>
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
