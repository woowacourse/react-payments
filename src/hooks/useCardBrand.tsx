import { useEffect, useState } from 'react';

type ValitationResult = {
  brand: string;
  error: { isValid: boolean; errorMessage: string };
  updateCardBrand: (value: string) => void;
  isComplete: boolean;
};

export default function useCardBrand(): ValitationResult {
  const [brand, setBrand] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });
  const [isComplete, setIsComplete] = useState(false);

  const updateCardBrand = (value: string) => {
    setBrand(value);

    validate(value);
  };

  useEffect(() => {
    if (brand !== '') setIsComplete(true);
  }, [brand]);

  const validate = (value: string) => {
    setBrand(value);

    if (value === '') {
      setError({ isValid: false, errorMessage: '' });
      return;
    }

    setError({ isValid: false, errorMessage: '' });
  };

  return { brand, error, updateCardBrand, isComplete };
}
