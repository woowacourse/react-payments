import { useState } from 'react';

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState({ name: '포코카드', color: '#E24141' });

  const handleClickCardCompany = (name, color) => {
    setCardCompany({ name, color });
  };

  return {
    cardCompany,
    handleClickCardCompany,
  };
};

export default useCardCompany;
