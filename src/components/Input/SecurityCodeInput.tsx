import { PaymentsInput } from 'components/common';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { ChangeEventHandler } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface SecurityInputProps extends ValueAndOnChange {
  width?: CSSProperties['width'];
}

export function SecurityCodeInput({ value, onChange, width }: SecurityInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (!isNumber(value)) return;

    onChange?.(value);
  };

  return (
    <Container>
      <PaymentsInputLabel required>보안 코드(CVC/CVV)</PaymentsInputLabel>
      <PaymentsInput
        value={value}
        type="password"
        maxLength={3}
        onChange={handleChange}
        inputMode="numeric"
        align="center"
        width={width}
        required
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
