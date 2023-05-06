import { PaymentsInput } from 'components/common';
import { PaymentsInputErrorLabel } from 'components/common/Label/PaymentsInputErrorLabel';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { useIsPaymentsInputErrors } from 'hooks/useIsPaymentsInputErrors';
import React, { ChangeEvent, useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface ExpirationProps {
  month: ValueAndOnChange;
  year: ValueAndOnChange;
  width?: CSSProperties['width'];
}

export function ExpirationDateInput(props: ExpirationProps) {
  const { month, year, width } = props;
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
      <PaymentsInputLabel required>만료일</PaymentsInputLabel>
      <InputsContainer>
        <PaymentsInput
          ref={(element) => (inputRefs.current[0] = element)}
          value={month.value}
          type="text"
          maxLength={2}
          placeholder="MM"
          onChange={(e) => handleChange(e, 0, month.onChange)}
          inputMode="numeric"
          width={width}
          align="center"
          isError={isInputErrors[0]}
          required
        />
        <SLASH />
        <PaymentsInput
          ref={(element) => (inputRefs.current[1] = element)}
          value={year.value}
          type="text"
          maxLength={2}
          placeholder="YY"
          onChange={(e) => handleChange(e, 1, year.onChange)}
          inputMode="numeric"
          width={width}
          align="center"
          isError={isInputErrors[1]}
          required
        />
      </InputsContainer>
      {isInputErrors.some((isError) => isError) && (
        <PaymentsInputErrorLabel>숫자만 입력해주세요</PaymentsInputErrorLabel>
      )}
    </Container>
  );
}

const SLASH = styled.span`
  margin: 0 3px;
  &::before {
    content: '/';
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
