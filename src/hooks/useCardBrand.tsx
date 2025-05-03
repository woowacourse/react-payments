import { useState } from 'react';

type ValitationResult = {
  brand: string;
  error: { isValid: boolean; errorMessage: string };
  validate: (value: string) => void;
};

export default function useCardBrand(): ValitationResult {
  const [brand, setBrand] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });

  const validate = (value: string) => {
    setBrand(value);

    if (value === '') {
      setError({ isValid: false, errorMessage: '' });
      return;
    }

    setError({ isValid: false, errorMessage: '' });
  };

  return { brand, error, validate };
}
