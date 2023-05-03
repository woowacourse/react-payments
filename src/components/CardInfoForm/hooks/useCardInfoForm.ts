import type { ChangeEventHandler, RefObject } from 'react';

import useCardFormAction from '../../../hooks/useCardFormAction';
import { isNotAlphabet, isNotNumber } from '../../../utils/validation';
import { isCardInfoKey } from '../../../contexts/CardFormContext';

const useCardInfoForm = (inputRefs: RefObject<HTMLInputElement>[]) => {
  const handleCardInfo = useCardFormAction();

  const autoFocusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength, tabIndex } = target;

    if (tabIndex === inputRefs.length) return;

    if (value.length === maxLength) {
      inputRefs[tabIndex].current?.focus();
    }
  };

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      value,
      name,
      dataset: { property },
    } = event.currentTarget;

    if (!isCardInfoKey(name)) return;
    if (isNotNumber(value)) return;

    handleCardInfo(value, name, property);
    autoFocusNextInput(event.currentTarget);
  };

  const handleOwnerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      value,
      name,
      dataset: { property },
    } = event.currentTarget;

    if (!isCardInfoKey(name)) return;
    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    handleCardInfo(value.toUpperCase(), name, property);
    autoFocusNextInput(event.currentTarget);
  };

  return {
    handleNumberChange,
    handleOwnerChange,
  };
};

export default useCardInfoForm;
