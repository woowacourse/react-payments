import { useRef, useState } from 'react';

const useCompany = () => {
  const [company, setCompany] = useState<string>('');

  const handleCompanySelect = (value: string) => {
    setCompany(value);
  };

  const companyRef = useRef<HTMLInputElement>(null);

  return { company, handleCompanySelect, companyRef };
};

export default useCompany;
