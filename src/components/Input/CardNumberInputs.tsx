import { Input } from 'components/common';
import { ChangeEventHandler, useState } from 'react';

export type ValueAndOnChange = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  return (
    <>
      {valueAndOnChanges.map(({ value, onChange }, index) => (
        <Input
          value={value}
          type={index < 2 ? 'text' : 'password'}
          maxLength={4}
          onChange={onChange}
          placeholder={DEFAULT_CARD_NUMBER}
        />
      ))}
    </>
  );
}
