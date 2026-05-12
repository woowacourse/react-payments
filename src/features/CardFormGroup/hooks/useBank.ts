import { useState } from 'react';
import { type Bank } from '@/entities/card/bank';

export interface UseBankResult {
  value: Bank;
  handleChange: (bank: Bank) => void;
}

export const useBank = ({ onComplete }: { onComplete: () => void }): UseBankResult => {
  const [bank, setBank] = useState<Bank>('unknown');

  const handleChange = (value: Bank) => {
    setBank(value);
    if (value !== 'unknown') onComplete();
  };

  return {
    value: bank,
    handleChange,
  };
};
