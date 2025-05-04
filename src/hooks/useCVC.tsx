import { useEffect, useState } from 'react';
import { CVC_RULE } from '../constants/cardValidationRule';
import { CVC_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  CVC: string;
  error: { isValid: boolean; errorMessage: string };
  udpateCVC: (value: string) => void;
  isDisplay: boolean;
  reset: () => void;
};

export default function useCVCNumber(): ValitationResult {
  const [CVC, setCVC] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });
  const [isDisplay, setIsDisplay] = useState(false);

  const udpateCVC = (value: string) => {
    if (value.length > CVC_RULE.MAX_LENGTH) return;

    setCVC(value);

    validate(value);
  };

  useEffect(() => {
    if (CVC.length === CVC_RULE.MAX_LENGTH) setIsDisplay(true);
  }, [CVC]);

  const validate = (value: string) => {
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

  return { CVC, error, udpateCVC, isDisplay, reset: () => setCVC('') };
}
