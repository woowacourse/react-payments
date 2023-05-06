import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { isInputNumber } from '../../utils/InputValidate';
import { INPUT_MAX_LENGTH } from '../../utils/Constants';
import { useContext, useEffect } from 'react';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';
import { useInput } from '../../hooks/useInput';

const SecurityCodeInput = () => {
  const { securityCode, setSecurityCode } = useContext(CardFormValueContext);
  const { securityCodeError, setSecurityCodeError } = useContext(
    CardFormErrorValueContext
  );

  const { value, errorMessage, handleChangeInput } = useInput(
    isInputNumber,
    INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH
  );

  useEffect(() => {
    setSecurityCode(value);
    setSecurityCodeError(errorMessage);
  }, [value, errorMessage]);

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
