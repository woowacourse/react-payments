import { ChangeEvent, ChangeEventHandler } from 'react';
import { ValueAndOnChange } from 'components/Input/types';
import { validateInput } from 'util/Validation';

const DEFAULT_CARD_NUMBER = '0000';
const THIRD_BOX = 2;

export type CardNumberInputProps = {
  value: string;
  type: string;
  maxLength: number;
  inputMode: 'numeric';
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type UseCardNumberInputsTypes = (
  valueAndOnChanges: ValueAndOnChange[],
) => { inputs: CardNumberInputProps[] };

export const useCardNumberInputs: UseCardNumberInputsTypes = (
  valueAndOnChanges: ValueAndOnChange[],
) => {
  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validateInput(value)) return;

    valueAndOnChanges[index].onChange(e);
  };

  const inputs: CardNumberInputProps[] = valueAndOnChanges.map(({ value }, index) => {
    return {
      value: value,
      inputMode: 'numeric',
      type: index < THIRD_BOX ? 'text' : 'password',
      maxLength: 4,
      placeholder: DEFAULT_CARD_NUMBER,
      required: true,
      onChange: handleChange(index),
    };
  });

  return { inputs };
};
