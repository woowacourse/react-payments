import { useState } from 'react';
import { CardCompanyType } from '../types';

const useCompany = () => {
  const [company, setCompany] = useState<CardCompanyType | null>(null);

  const handleCompanySelect = (value: CardCompanyType) => {
    setCompany(value);
  };

  return { company, handleCompanySelect };
};

export default useCompany;
