import { PaymentsInput } from 'components/common';
import { PaymentsInputErrorLabel } from 'components/common/Label/PaymentsInputErrorLabel';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { useIsPaymentsInputErrors } from 'hooks/useIsPaymentsInputErrors';
import React, { ChangeEvent, useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface PasswordInputProps {
  first: ValueAndOnChange;
  second: ValueAndOnChange;
  width?: CSSProperties['width'];
}

export function PasswordInput(props: PasswordInputProps) {
  const { first, second, width } = props;
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [isInputErrors, setIsInputError] = useIsPaymentsInputErrors(2);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ValueAndOnChange['onChange']
  ) => {
    const value = e.target.value;

    if (!isNumber(value)) {
      setIsInputError(index)(true);
      return;
    }
    if (index < inputRefs.current.length - 1 && value.length === e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
    }

    onChange?.(value);
    setIsInputError(index)(false);
  };

  return (
    <Container>
      <PaymentsInputLabel required>카드 비밀번호</PaymentsInputLabel>
      <InputsContainer>
        <PaymentsInput
          ref={(element) => (inputRefs.current[0] = element)}
          value={first.value}
          type="password"
          maxLength={1}
          onChange={(e) => handleChange(e, 0, first.onChange)}
          inputMode="numeric"
          align="center"
          width={width}
          isError={isInputErrors[0]}
          required
        />
        <PaymentsInput
          ref={(element) => (inputRefs.current[1] = element)}
          value={second.value}
          type="password"
          maxLength={1}
          onChange={(e) => handleChange(e, 1, second.onChange)}
          inputMode="numeric"
          align="center"
          width={width}
          isError={isInputErrors[1]}
          required
        />
        <DotContainer {...props}>•</DotContainer>
        <DotContainer {...props}>•</DotContainer>
      </InputsContainer>
      {isInputErrors.some((isError) => isError) && (
        <PaymentsInputErrorLabel>숫자만 입력해주세요</PaymentsInputErrorLabel>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const InputsContainer = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const DotContainer = styled.div<PasswordInputProps>`
  padding: 0 19px;
  font-size: 16px;
`;
