import { useEffect, useState } from 'react';

interface Props {
  defaultValue: Record<string, boolean>;
  setCanSubmit: (value: boolean) => void;
}

const useComplete = ({ defaultValue, setCanSubmit }: Props) => {
  const [complete, setComplete] =
    useState<Record<string, boolean>>(defaultValue);

  useEffect(() => {
    if (Object.values(complete).every((value) => value === true)) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [complete, setCanSubmit]);

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
