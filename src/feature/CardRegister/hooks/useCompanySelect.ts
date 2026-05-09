import {useState} from 'react';
import type {CardCompanyType} from '../domain/cardCompany';

export function useCompanySelect() {
  const [selectedCompany, setSelectedCompany] = useState<CardCompanyType | null>(null);

  return {
    selectedCompany,
    isComplete: selectedCompany !== null,
    handleChange: setSelectedCompany,
  };
}
