import { useState, useRef } from 'react';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';
import styled from 'styled-components';

export function SecurityCodeInput() {
  const [securityCode, setSecurityCode] = useState('');

  const securityCodeInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(e.target.value)) {
      e.target.value = '';

      alert('유효한 보안 코드가 아닙니다.');
    }

    setSecurityCode(e.target.value.toUpperCase());
  };

  const validateSecurityCode = () => {
    if (!isValidSecurityCode(securityCode) && securityCode !== '') {
      alert('유효한 보안 코드가 아닙니다.');

      setSecurityCode('');
      securityCodeInputRef.current?.focus();
    }
  };

  return (
    <>
      <Style.Label>
        <Style.Title>보안 코드(CVC/CVV)</Style.Title>
      </Style.Label>
      <InputWrapper width={84}>
        <Input
          ref={securityCodeInputRef}
          value={securityCode}
          width={'84'}
          minLength={3}
          maxLength={3}
          placeholder="•••"
          onChange={handleInputChange}
          onBlur={validateSecurityCode}
          inputMode="numeric"
          type="password"
          required
        />
      </InputWrapper>
    </>
  );
}

const isNumeric = (input: string) => {
  return /^[0-9]*$/.test(input);
};

const isValidSecurityCode = (input: string) => {
  return input.length === 3;
};

const Style = {
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
