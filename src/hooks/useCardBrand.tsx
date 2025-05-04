import { useEffect, useState } from 'react';

type ValitationResult = {
  brand: string;
  error: { isValid: boolean; errorMessage: string };
  updateCardBrand: (value: string) => void;
  isDisplay: boolean;
  reset: () => void;
};

export default function useCardBrand(): ValitationResult {
  const [brand, setBrand] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });
  const [isDisplay, setIsDisplay] = useState(false);

  const updateCardBrand = (value: string) => {
    setBrand(value);

    validate(value);
  };

  useEffect(() => {
    if (brand !== '') setIsDisplay(true);
  }, [brand]);

  const validate = (value: string) => {
    if (value === '') {
      setError({ isValid: false, errorMessage: '' });
      return;
    }

    setError({ isValid: false, errorMessage: '' });
  };

  return {
    brand,
    error,
    updateCardBrand,
    isDisplay,
    reset: () => setBrand(''),
  };
}
