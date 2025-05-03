import { useState } from 'react';
import { PASSWORD_RULE } from '../constants/cardValidationRule';
import { PASSWORD_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  password: string;
  error: { isValid: boolean; errorMessage: string };
  validate: (value: string) => void;
};

export default function usePassword(): ValitationResult {
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ isValid: false, errorMessage: '' });

  const validate = (value: string) => {
    if (value.length > PASSWORD_RULE.MAX_LENGTH) return;

    setPassword(value);

    if (value === '') {
      setError({ isValid: false, errorMessage: '' });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({ isValid: true, errorMessage: PASSWORD_ERROR.NOT_A_NUMBER });
      return;
    }
    if (value.length < PASSWORD_RULE.MAX_LENGTH) {
      setError({
        isValid: true,
        errorMessage: PASSWORD_ERROR.INVALID_LENGTH,
      });
      return;
    }
    setError({ isValid: false, errorMessage: '' });
  };

  return { password, error, validate };
}
