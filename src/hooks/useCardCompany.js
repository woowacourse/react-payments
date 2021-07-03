import { useState } from 'react';

export const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState({ name: '', color: '' });

  const handleCardCompany = ({ target }) => {
    const company = target.closest('li').dataset.company;

    setCardCompany({
      name: `${company} 카드`,
      color: `bg-${company}`,
    });
  };

  return {
    cardCompany: {
      value: cardCompany,
      handleChange: handleCardCompany,
    },
  };
};
