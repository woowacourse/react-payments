import { useState } from 'react';
import { CardInfoType } from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { SectionNavigation, SectionState } from './types';

interface UseCardCompanyProps {
  sectionState: SectionState;
  sectionNavigation: SectionNavigation;
}

export function useCardCompany({ sectionState, sectionNavigation }: UseCardCompanyProps) {
  const [cardCompany, setCardCompany] = useState<string>('');

  const updateCardCompany = (value: string) => {
    setCardCompany(value);
  };

  const changeCardCompany = (value: string) => {
    updateCardCompany(value);

    if (value) {
      sectionNavigation.completeSection(CardInfoType.COMPANY);
    }
  };

  return {
    cardCompany,
    changeCardCompany,
  };
}
