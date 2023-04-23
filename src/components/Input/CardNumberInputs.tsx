import { Input } from 'components/common';
import { ValueAndOnChange } from './types';
import React, { ChangeEvent, ChangeEventHandler } from 'react';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';
const THIRD_BOX = 2;

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const inputRefs = valueAndOnChanges.map(() => React.createRef<HTMLInputElement>());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    if (index < valueAndOnChanges.length - 1 && value.length === e.target.maxLength) {
      inputRefs[index + 1].current?.focus();
    }
    onChange && onChange(e);
  };

  return (
    <>
      {valueAndOnChanges.map(({ value, onChange }, index) => {
        return (
          <>
            <Input
              ref={inputRefs[index]}
              inputMode="numeric"
              value={value}
              type={index < THIRD_BOX ? 'text' : 'password'}
              maxLength={4}
              onChange={(e) => handleChange(e, index, onChange)}
              placeholder={DEFAULT_CARD_NUMBER}
              required
            />
            {index < valueAndOnChanges.length - 1 && <span>-</span>}
          </>
        );
      })}
    </>
  );
}
