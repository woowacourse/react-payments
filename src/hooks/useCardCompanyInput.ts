import { useState } from 'react';

function useCardCompanyInput() {
  const [cardCompany, setCardCompany] = useState('');
  const [cardCompanyError, setCardCompanyError] = useState(false);

  const handleCardCompanyChange = (value: string) => {
    setCardCompany(value);
  };

  const handleBlurCardCompanySelect = () => {
    if (cardCompany === '') {
      return setCardCompanyError(true);
    }
    return setCardCompanyError(false);
  };

  return {
    cardCompany,
    cardCompanyError,
    handleCardCompanyChange,
    handleBlurCardCompanySelect,
  };
}

export default useCardCompanyInput;
