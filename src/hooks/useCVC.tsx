import { useState } from 'react';

const CVC_RULE = {
  INVALID_LENGTH_ERROR: 'CVC는 3자리로 입력해 주세요.',
  NOT_A_NUMBER: 'CVC는 숫자로 입력해 주세요.',
  MAX_LENGTH: 3,
} as const;

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
      setError({ isValid: true, errorMessage: CVC_RULE.NOT_A_NUMBER });
      return;
    }
    if (value.length < CVC_RULE.MAX_LENGTH) {
      setError({ isValid: true, errorMessage: CVC_RULE.INVALID_LENGTH_ERROR });
      return;
    }
    setError({ isValid: false, errorMessage: '' });
  };

  return { CVC, error, validate };
}
