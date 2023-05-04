import type { ChangeEventHandler } from 'react';

import useCardFormAction from '../../../hooks/useCardFormAction';
import { isNotAlphabet, isNotNumber } from '../../../utils/validation';
import { isCardInfoKey } from '../../../contexts/CardFormContext';

const useCardInfoForm = () => {
  const handleCardInfo = useCardFormAction();

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      value,
      name,
      dataset: { property },
    } = event.currentTarget;

    if (!isCardInfoKey(name)) return;
    if (isNotNumber(value)) return;

    handleCardInfo(value, name, property);
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
  };

  return {
    handleNumberChange,
    handleOwnerChange,
  };
};

export default useCardInfoForm;
