import React from 'react';
import { useState } from 'react';

export const useBrand = (): {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  updateBrand: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isComplete: boolean;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  isDisplay: boolean;
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [brand, setBrand] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setBrand(value);

    const isValid = value !== '';
    setIsComplete(isValid);
    if (isValid) setIsDisplay(true);
  };

  return {
    brand,
    setBrand,
    updateBrand,
    isComplete,
    setIsComplete,
    isDisplay,
    setIsDisplay,
  };
};
