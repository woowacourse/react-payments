import { useState } from 'react';

export type HandleInputParams = {
  value: string;
  idx: number;
};

export function useInput(initialValue: string[]): [string[], (params: HandleInputParams) => void] {
  const [values, setValues] = useState(initialValue);

  const handleInput = ({ value, idx }: HandleInputParams) => {
    setValues((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  return [values, handleInput];
}
