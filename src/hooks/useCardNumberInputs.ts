import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ValueAndOnChange } from 'components/Input/types';
import { validateInput } from 'util/Validation';
import { isNumberLengthValid } from 'util/ValidateForm';

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
) => { isError: boolean; curIndex: number; inputs: CardNumberInputProps[] };

export const useCardNumberInputs: UseCardNumberInputsTypes = (
  valueAndOnChanges: ValueAndOnChange[],
) => {
  const [isError, setIsError] = useState(false);
  const [curIndex, setCurIndex] = useState(-1);

  const setErrorAndCurrentIndex = (index: number) => {
    setCurIndex(index);
    setIsError(true);
  };

  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validateInput(value)) {
      setErrorAndCurrentIndex(index);
      return;
    }

    isNumberLengthValid(value, 4) ? setIsError(false) : setErrorAndCurrentIndex(index);
    valueAndOnChanges[index].onChange(e);
  };

  const inputs: CardNumberInputProps[] = valueAndOnChanges.map(({ value }, index) => {
    return {
      value: value,
      inputMode: 'numeric',
      id: index,
      type: index < THIRD_BOX ? 'text' : 'password',
      maxLength: 4,
      placeholder: DEFAULT_CARD_NUMBER,
      required: true,
      onChange: handleChange(index),
    };
  });

  return { isError, curIndex, inputs };
};
