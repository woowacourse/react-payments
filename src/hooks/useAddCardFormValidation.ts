import { useState } from 'react';

const useAddCardFormValidation = () => {
  const [error, setError] = useState({
    cardCompany: false,
    cardExpirationDate: false,
  });

  const validateExpirationDate = ({ year, month }: { month: string; year: string }) => {
    const today = new Date();
    const expirationDate = new Date(`20${year}-${month}`);

    if (today > expirationDate) {
      setError((prev) => ({
        ...prev,
        cardExpirationDate: true,
      }));
      return true;
    }
  };

  const validateCardCompany = (cardCompany: string) => {
    if (cardCompany === '') {
      setError((prev) => ({
        ...prev,
        cardCompany: true,
      }));
      return true;
    }
  };

  return {
    error,
    validateExpirationDate,
    validateCardCompany,
  };
};

export default useAddCardFormValidation;
