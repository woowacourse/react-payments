import { useRef, useState } from 'react';

const useCompany = () => {
  const [company, setCompany] = useState<string>('');

  const handleCompanySelect = (value: string) => {
    setCompany(value);
  };

  return { company, handleCompanySelect };
};

export default useCompany;
