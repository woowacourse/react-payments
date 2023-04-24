import { forwardRef, useEffect } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';

interface Props {
  securityCode: string;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
  focusFirstSecurityCodeInput: () => void;
}

export const SecurityCodeInput = forwardRef<HTMLInputElement[], Props>(
  function SecurityCodeInput(
    { securityCode, setSecurityCode, focusFirstSecurityCodeInput },
    refs
  ) {
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

        if (typeof refs !== 'object') return;
        if (refs?.current) refs.current[0].focus();
      }
    };

    useEffect(() => {
      focusFirstSecurityCodeInput();
    }, []);

    return (
      <>
        <Style.Label>
          <Style.Title>보안 코드(CVC/CVV)</Style.Title>
        </Style.Label>
        <InputWrapper width={84}>
          <Input
            ref={(element) => {
              if (!(element instanceof HTMLInputElement)) return;
              if (typeof refs !== 'object') return;
              if (refs?.current) refs.current[0] = element;
            }}
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
);

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
