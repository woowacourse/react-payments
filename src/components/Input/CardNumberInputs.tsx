import { PaymentsInput } from 'components/common';
import { ValueAndOnChange } from './types';
import { ChangeEvent, Fragment, useRef, useState } from 'react';
import { isNumber } from 'utils';
import styled from 'styled-components';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import { PaymentsInputErrorLabel } from 'components/common/Label/PaymentsInputErrorLabel';
import { useIsPaymentsInputErrors } from 'hooks/useIsPaymentsInputErrors';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [isInputErrors, setIsInputError] = useIsPaymentsInputErrors(valueAndOnChanges.length);

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
      <PaymentsInputLabel required>카드 번호</PaymentsInputLabel>
      <InputsContainer>
        {valueAndOnChanges.map(({ value, onChange }, index) => (
          <Fragment key={index}>
            <PaymentsInput
              ref={(element) => (inputRefs.current[index] = element)}
              value={value}
              type={index < 2 ? 'text' : 'password'}
              maxLength={4}
              onChange={(e) => handleChange(e, index, onChange)}
              placeholder={DEFAULT_CARD_NUMBER}
              inputMode="numeric"
              align="center"
              isError={isInputErrors[index]}
              required
            />
            {index < valueAndOnChanges.length - 1 && <Dash>-</Dash>}
          </Fragment>
        ))}
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
  display: flex;
  align-items: center;
  width: 100%;
`;

const Dash = styled.span`
  font-size: 20px;
  margin: 0 4px;
`;
