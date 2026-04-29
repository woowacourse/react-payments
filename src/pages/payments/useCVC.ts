import { useState } from 'react';

const checkVadlidateCvc = (cvc: string) => {
  if (cvc.length === 3) return true;
  return false;
};

export const useCVC = () => {
  const [cvc, setCVC] = useState('');

  const valid = checkVadlidateCvc(cvc);

  const cvcForm = {
    state: {
      cvc: {
        value: cvc,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCVC(e.target.value),
      },
    },
    valid,
  };

  return cvcForm;
};
