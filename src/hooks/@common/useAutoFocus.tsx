import React, { FormEvent, useState } from 'react';

export default function useAutoFocus() {
  const [isAllFilled, setIsAllFilled] = useState(false);

  const findInvalidInput = (inputs: HTMLInputElement[]) => inputs.find((input) => !input.validity.valid);
  const checkAllFilled = (inputs: HTMLInputElement[]) =>
    inputs.every((input, i, inputs) => input.value.length === input.maxLength);

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((e) => e.tagName === 'INPUT') as HTMLInputElement[];

    inputs.forEach((input, i) => {
      if (input !== e.target) return;

      const { value, maxLength } = input;
      const nextInput = findInvalidInput(inputs.slice(i + 1)) ?? inputs[i + 1];
      const prevInput = findInvalidInput(inputs.slice(0, i).reverse()) ?? inputs[i - 1];

      value.length === maxLength && nextInput?.focus();
      !value && prevInput?.focus();
    });

    setIsAllFilled(checkAllFilled(inputs));
  };
  return { isAllFilled, handleChange };
}
