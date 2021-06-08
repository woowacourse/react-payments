import { useState } from 'react';

export const useFormCompany = () => {
  const [company, setCompany] = useState('');
  const [inputValid, setInputValid] = useState(true);

  const handleCompanyChange = (companyName) => {
    setInputValid(() => true);
    setCompany(companyName);
  };

  return {
    company: {
      value: company,
      handleChange: handleCompanyChange,
      isValid: inputValid,
    },
  };
};
