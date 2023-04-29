import { PaymentsInput } from 'components/common';
import { ValueAndOnChange } from './types';
import { ChangeEvent, Fragment, useRef } from 'react';
import { isNumber } from 'utils';
import styled from 'styled-components';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ValueAndOnChange['onChange']
  ) => {
    const value = e.target.value;

    if (!isNumber(value)) return;

    if (index < inputRefs.current.length - 1 && value.length === e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
    }
    onChange?.(value);
  };

  return (
    <Container>
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
            required
          />
          {index < valueAndOnChanges.length - 1 && <span>-</span>}
        </Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  span {
    font-size: 20px;
    margin: 0 4px;
  }
`;
