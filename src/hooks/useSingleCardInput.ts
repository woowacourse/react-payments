import { useCallback, useState } from 'react';

import { CardInputItem } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { validationCardInfo } from '@/utils/validation';

type Props = {
  state: CardInputItem;
  setState: (state: CardInputItem) => void;
  onValid: VoidFunction;
  valueLength: number;
};

export const useSingleCardInput = ({ state, setState, onValid, valueLength }: Props) => {
  const [error, setError] = useState<string>('');

  const validateInput = useCallback((value: string) => {
    return validationCardInfo(value, valueLength);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const { isValid, errorMessage: validateErrorMessage } = validateInput(newValue);

    const updatedState = { value: newValue, isValid: isValid };
    setState(updatedState);
    if (!isValid) return setError(validateErrorMessage);

    if (newValue.length === valueLength) {
      handleNextStep(updatedState);
    }
  };

  const handleNextStep = (updatedState: CardInputItem) => {
    if (updatedState.isValid) {
      onValid();
    }
  };

  return {
    state,
    error,
    handleChange,
  };
};
