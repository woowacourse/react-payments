import type { ChangeEventHandler, RefObject } from 'react';

import { isNotAlphabet, isNotNumber } from '../utils/validation';
import useCardFormAction from '../../../hooks/useCardFormAction';
import { InputAction } from '../../../contexts/CardFormContext';

const useCardRegisterForm = (inputRefs: RefObject<HTMLInputElement>[]) => {
  const { inputAction } = useCardFormAction();

  //const isValidCardData =
  //  cardNumber1.length === 4 &&
  //  cardNumber2.length === 4 &&
  //  cardNumber3.length === 4 &&
  //  cardNumber4.length === 4 &&
  //  expiredMonth.length === 2 &&
  //  expiredYear.length === 2 &&
  //  cvc.length === 3 &&
  //  cardPassword1.length === 1 &&
  //  cardPassword2.length === 1;

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

export default useCardRegisterForm;
