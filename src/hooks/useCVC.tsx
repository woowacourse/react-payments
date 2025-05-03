import { useState } from 'react';
import { CVC_RULE } from '../constants/cardValidationRule';
import { CVC_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  CVC: string;
  error: { isValid: boolean; errorMessage: string };
  validate: (value: string) => void;
};

export default function useCVCNumber(): ValitationResult {
  const [CVC, setCVC] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });

  const validate = (value: string) => {
    if (value.length > 3) return;

    setCVC(value);

    if (value === '') {
      setError({ isValid: true, errorMessage: '' });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({ isValid: true, errorMessage: CVC_ERROR.NOT_A_NUMBER });
      return;
    }
    if (value.length < CVC_RULE.MAX_LENGTH) {
      setError({ isValid: true, errorMessage: CVC_ERROR.INVALID_LENGTH });
      return;
    }
    setError({ isValid: false, errorMessage: '' });
  };

  return { CVC, error, validate };
}
