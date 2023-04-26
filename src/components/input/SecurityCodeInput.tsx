import { forwardRef, useEffect } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';
import { useError } from '../../hooks/useError';

interface Props {
  securityCode: string;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
  viewNextInput: () => void;
  viewPreviousInput: () => void;
}

const securityCodeInputValidator = (input: string | string[]) => {
  if (typeof input === 'object') return;

  if (!/^[0-9]*$/.test(input))
    throw new Error('보안 코드는 숫자만 입력가능합니다.');

  if (input.length !== 3)
    throw new Error('보안 코드 세자리를 모두 입력해주세요.');
};

export const SecurityCodeInput = forwardRef<HTMLInputElement[], Props>(
  function SecurityCodeInput(
    { securityCode, setSecurityCode, viewNextInput, viewPreviousInput },
    refs
  ) {
    const error = useError(securityCode, securityCodeInputValidator);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSecurityCode(e.target.value);
    };

    const handlePressBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      if (e.key === 'Backspace' && e.target.value === '') viewPreviousInput();
    };

    useEffect(() => {
      if (error === null) viewNextInput();
    }, [error, viewNextInput]);

    return (
      <div>
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
            autoFocus={true}
            value={securityCode}
            width={'84'}
            minLength={3}
            maxLength={3}
            placeholder="•••"
            onChange={handleInputChange}
            onKeyDown={handlePressBackspace}
            inputMode="numeric"
            type="password"
            autoComplete="off"
            required
          />
        </InputWrapper>
        <Style.ErrorMessage>{error ?? ''}</Style.ErrorMessage>
      </div>
    );
  }
);

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
  ErrorMessage: styled.span`
    width: 318px;

    color: red;
    font-size: 12px;
  `,
};
