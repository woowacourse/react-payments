import { Input } from 'components/common';
import { ValueAndOnChange } from './types';
import React, { ChangeEvent, Fragment } from 'react';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const inputRefs = valueAndOnChanges.map(() => React.createRef<HTMLInputElement>());
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ValueAndOnChange['onChange']
  ) => {
    const value = e.target.value;

    if (index < valueAndOnChanges.length - 1 && value.length === e.target.maxLength) {
      inputRefs[index + 1].current?.focus();
    }
    onChange?.(value);
  };

  return (
    <>
      {valueAndOnChanges.map(({ value, onChange }, index) => (
        <Fragment key={index}>
          <Input
            ref={inputRefs[index]}
            value={value}
            type={index < 2 ? 'text' : 'password'}
            maxLength={4}
            onChange={(e) => handleChange(e, index, onChange)}
            placeholder={DEFAULT_CARD_NUMBER}
            inputMode="numeric"
            required
          />
          {index < valueAndOnChanges.length - 1 && <span>-</span>}
        </Fragment>
      ))}
    </>
  );
}
