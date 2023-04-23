import styled from 'styled-components';
import { useEffect } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { SecurityCode } from '../../types';
import { hasValidLength, isNumeric } from '../../validator';

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
      alert('숫자를 입력해주세요.');

      e.target.value = '';
    }

    setSecurityCode(e.target.value.toUpperCase());
  };

  const validateSecurityCode = () => {
    if (!hasValidLength(securityCode, 3) && securityCode !== '') {
      alert('유효한 보안 코드가 아닙니다. 3자리 숫자를 입력해주세요.');

      setSecurityCode('');
      securityCodeInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (securityCode.length === 3) moveFocusToPassword();
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
          minLength={3}
          maxLength={3}
          placeholder='•••'
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
