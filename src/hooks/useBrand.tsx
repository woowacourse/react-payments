import React from 'react';
import { useState } from 'react';

export const useBrand = (): {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  updateBrand: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} => {
  const [brand, setBrand] = useState('');

  const updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setBrand(value);

    // const isValid = value !== '';
    // updateInputState('brand', { isComplete: isValid });
    // if (isValid) updateInputState('expiry', { isVisible: true });
  };

  return { brand, setBrand, updateBrand };
};
