import { useState } from 'react';
import { type Bank } from '@/entities/card/bank/bank';

interface UseBankProps {
  onComplete: () => void;
}

export interface UseBankResult {
  value: Bank | undefined;
  handleChange: (bank: Bank) => void;
}

export const useBank = ({ onComplete }: UseBankProps): UseBankResult => {
  const [value, setValue] = useState<Bank | undefined>(undefined);

  const handleChange = (bank: Bank) => {
    setValue(bank);
    console.log(bank);
    if (bank !== undefined) onComplete();
  };

  return { value, handleChange };
};
