import { useState } from 'react';

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState('');
  const checkCardCompany = (value: string) => {
    setCardCompany(value);
  };

  return { cardCompany, checkCardCompany };
};

export default useCardCompany;
