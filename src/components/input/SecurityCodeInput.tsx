import styled from 'styled-components';
import { useEffect } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { SecurityCode } from '../../types';
import { hasValidLength, isNumeric } from '../../validator';
import { ERROR, PASSWORD_TEXT, SECURITY_CODE_LENGTH } from '../../constants';

interface Props {
  securityCode: SecurityCode;
  securityCodeInputRef: React.RefObject<HTMLInputElement>;
  setSecurityCode: React.Dispatch<React.SetStateAction<SecurityCode>>;
  moveFocusToPassword: () => void;
}

export function SecurityCodeInput({
  securityCodeInputRef,
  moveFocusToPassword,
  securityCode,
  setSecurityCode,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(e.target.value)) {
      alert(ERROR.IS_NOT_NUMBER);

      e.target.value = '';
    }

    setSecurityCode(e.target.value.toUpperCase());
  };

  const validateSecurityCode = () => {
    if (!hasValidLength(securityCode, SECURITY_CODE_LENGTH) && securityCode !== '') {
      alert(ERROR.INVALID_SECURITY_CODE);

      setSecurityCode('');
      securityCodeInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (securityCode.length === SECURITY_CODE_LENGTH) moveFocusToPassword();
  }, [securityCode]);

  return (
    <>
      <Style.Label htmlFor='CVC'>
        <Style.Title>보안 코드(CVC/CVV)</Style.Title>
      </Style.Label>
      <InputWrapper width={84}>
        <Input
          id='CVC'
          ref={securityCodeInputRef}
          value={securityCode}
          width={84}
          minLength={SECURITY_CODE_LENGTH}
          maxLength={SECURITY_CODE_LENGTH}
          placeholder={PASSWORD_TEXT.repeat(SECURITY_CODE_LENGTH)}
          onChange={handleInputChange}
          onBlur={validateSecurityCode}
          inputMode='numeric'
          type='password'
          required
        />
      </InputWrapper>
    </>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
