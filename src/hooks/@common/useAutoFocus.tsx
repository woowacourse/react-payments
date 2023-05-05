import React, { FormEvent, useState } from 'react';
import { isPatternMatch } from '../../utils/validation';

export default function useAutoFocus() {
  const [isAllFilled, setIsAllFilled] = useState(false);

  const findInvalidInput = (inputs: HTMLInputElement[]) => inputs.find((input) => !input.validity.valid);
  const validateAllInputs = (inputs: HTMLInputElement[]) => inputs.every((input) => input.validity.valid);

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((e) => e.tagName === 'INPUT') as HTMLInputElement[];

    inputs.forEach((input, i) => {
      if (input !== e.target) return;

      const { value, name, pattern, maxLength } = input;
      const nextInput = findInvalidInput(inputs.slice(i + 1)) ?? inputs[i + 1];

      if (name === 'name') {
        value.length === maxLength && nextInput?.focus();

        return;
      }

      isPatternMatch(value, pattern) && nextInput?.focus();
    });

    setIsAllFilled(validateAllInputs(inputs));
  };
  return { isAllFilled, handleChange };
}
