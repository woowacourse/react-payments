import { useEffect, useState } from 'react';
import { DEFAULT_CARD_BOOLEAN } from '../constants/card';

interface Props {
  handleSubmit: (value: boolean) => void;
}

const useComplete = ({ handleSubmit }: Props) => {
  const [complete, setComplete] =
    useState<Record<string, boolean>>(DEFAULT_CARD_BOOLEAN);

  useEffect(() => {
    if (Object.values(complete).every((value) => value === true)) {
      handleSubmit(true);
    } else {
      handleSubmit(false);
    }
  }, [complete, handleSubmit]);

  const handleComplete = (str: string, isComplete: boolean) => {
    setComplete((prev) => {
      return {
        ...prev,
        [str]: isComplete,
      };
    });
  };

  return {
    handleComplete,
  };
};

export default useComplete;
