import type { ChangeEventHandler, RefObject } from 'react';

import { isNotAlphabet, isNotNumber } from '../../../utils/validation';
import useCardFormAction from '../../../hooks/useCardFormAction';
import { InputAction } from '../../../contexts/CardFormContext';

const useCardInfoForm = (inputRefs: RefObject<HTMLInputElement>[]) => {
  const { inputAction } = useCardFormAction();

  const autoFocusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength, tabIndex } = target;

    if (tabIndex === inputRefs.length) return;

    if (value.length === maxLength) {
      inputRefs[tabIndex].current?.focus();
    }
  };

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      dataset: { setValue },
      value,
    } = event.currentTarget;

    if (isNotNumber(value)) return;

    const setNumber = inputAction[setValue as keyof InputAction];

    setNumber(value);
    autoFocusNextInput(event.currentTarget);
  };

  const handleOwnerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      dataset: { setValue },
      value,
    } = event.currentTarget;

    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    const setOwner = inputAction[setValue as keyof InputAction];

    setOwner(value.toUpperCase());
    autoFocusNextInput(event.currentTarget);
  };

  return {
    handleNumberChange,
    handleOwnerChange,
  };
};

export default useCardInfoForm;
