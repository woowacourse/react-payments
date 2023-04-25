import type { ChangeEventHandler, RefObject } from 'react';

import useCardRegisterStates from './useCardRegisterStates';
import { isNotAlphabet, isNotNumber } from '../../../utils/validation';

const useCardRegisterForm = (inputRefs: RefObject<HTMLInputElement>[]) => {
  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    cardPassword1,
    cardPassword2,
    isFormStateName,
    getTargetSetState,
  } = useCardRegisterStates();

  const isValidCardData =
    cardNumber1.length === 4 &&
    cardNumber2.length === 4 &&
    cardNumber3.length === 4 &&
    cardNumber4.length === 4 &&
    expiredMonth.length === 2 &&
    expiredYear.length === 2 &&
    cvc.length === 3 &&
    cardPassword1.length === 1 &&
    cardPassword2.length === 1;

  const autoFocusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength, tabIndex } = target;

    if (tabIndex === inputRefs.length) return;

    if (value.length === maxLength) {
      inputRefs[tabIndex].current?.focus();
    }
  };

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    if (!isFormStateName(name)) return;
    if (isNotNumber(value)) return;

    const setNumber = getTargetSetState(name);

    setNumber(value);
    autoFocusNextInput(event.target);
  };

  const handleOwnerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    if (!isFormStateName(name)) return;
    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    const setOwner = getTargetSetState(name);

    setOwner(value.toUpperCase());
    autoFocusNextInput(event.target);
  };

  return {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    cardPassword1,
    cardPassword2,

    isValidCardData,
    handleNumberChange,
    handleOwnerChange,
  };
};

export default useCardRegisterForm;
