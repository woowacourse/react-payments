import { SECURITY_CODE_LENGTH } from '../../../../../constants';

export const handleSecurityCodeInputChange = (props) => {
  const { e, passwordInputRef, setSecurityCode, setSecurityCodeInString } = props;
  const slicedInputValue = e.target.value.slice(0, SECURITY_CODE_LENGTH);

  if (slicedInputValue.length === SECURITY_CODE_LENGTH) {
    passwordInputRef.current.focus();
  }
  setSecurityCodeInString(slicedInputValue);
  setSecurityCode(slicedInputValue);
};
