import styled from 'styled-components';
import { useEffect } from 'react';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { SecurityCode } from '../../types';
import { hasValidLength, isNumeric } from '../../utils/validator';
import { ERROR, PASSWORD_TEXT, SECURITY_CODE_SIZE } from '../../constants';
import { isFullInput } from '../../utils';

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
    if (!hasValidLength(securityCode, SECURITY_CODE_SIZE) && securityCode !== '') {
      alert(ERROR.INVALID_SECURITY_CODE);

      setSecurityCode('');
      securityCodeInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isFullInput(securityCode, SECURITY_CODE_SIZE)) moveFocusToPassword();
  }, [securityCode]);

  return (
    <>
      <Style.Label htmlFor='CVC'>
        <Style.Title>보안 코드(CVC/CVV)</Style.Title>
      </Style.Label>
      <InputContainer width={'84px'}>
        <Input
          id='CVC'
          ref={securityCodeInputRef}
          value={securityCode}
          width={'84px'}
          minLength={SECURITY_CODE_SIZE}
          maxLength={SECURITY_CODE_SIZE}
          placeholder={PASSWORD_TEXT.repeat(SECURITY_CODE_SIZE)}
          onChange={handleInputChange}
          onBlur={validateSecurityCode}
          inputMode='numeric'
          type='password'
          required
        />
      </InputContainer>
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
