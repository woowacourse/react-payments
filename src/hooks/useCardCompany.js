import { useState } from 'react';

export const useCardCompany = () => {
  const initialState = { name: '', color: '' };

  const [cardCompany, setCardCompany] = useState(initialState);

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
      reset: () => setCardCompany(initialState),
    },
  };
};
