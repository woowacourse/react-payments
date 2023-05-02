import { useEffect, useState } from 'react';
import { isValidSecurityCode } from '../../cardInputValidator';
import { isNumeric } from '../../utils/validator';
import { isFullInput } from '../../utils';
import { ERROR, SECURITY_CODE_SIZE } from '../../constants';
import { SecurityCode } from '../../types';

interface Props {
  securityCode: SecurityCode;
  setSecurityCode: (input: SecurityCode) => void;
  moveFocusToPassword?: () => void;
}

export const useSecurityCodeInput = ({
  securityCode,
  setSecurityCode,
  moveFocusToPassword,
}: Props) => {
  const [securityCodeError, setSecurityCodeError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityCode(e.target.value.toUpperCase());

    if (!isNumeric(e.target.value)) {
      setSecurityCodeError(ERROR.IS_NOT_NUMBER);
      return;
    }

    setSecurityCodeError('');
  };

  const updateSecurityCodeError = () => {
    if (isValidSecurityCode(securityCode)) return;

    setSecurityCodeError(ERROR.INVALID_SECURITY_CODE);
  };

  useEffect(() => {
    if (
      isFullInput(securityCode, SECURITY_CODE_SIZE) &&
      isValidSecurityCode(securityCode) &&
      moveFocusToPassword
    )
      moveFocusToPassword();
  }, [securityCode]);

  return { securityCodeError, updateSecurityCodeError, handleInputChange };
};
