import { useState } from 'react';
import {
  CARD_COMPANIES,
  type CardCompanyId,
} from '../../../domain/card/constant/cardCompanies';

type UseCardCompanyFieldParams = {
  onComplete?: () => void;
};

export type CardCompanyFieldType = ReturnType<typeof useCardCompanyField>;

export const useCardCompanyField = ({
  onComplete,
}: UseCardCompanyFieldParams) => {
  const [cardCompanyId, setCardCompanyId] = useState<CardCompanyId | null>(
    null,
  );

  const cardCompanyOptions = CARD_COMPANIES.map((cardCompany) => ({
    value: cardCompany.id,
    label: cardCompany.name,
  }));

  const isComplete = cardCompanyId !== null;

  const handleChange = (cardCompanyId: CardCompanyId | null) => {
    setCardCompanyId(cardCompanyId);

    if (cardCompanyId !== null) {
      onComplete?.();
    }
  };

  return {
    cardCompanyId,
    cardCompanyOptions,
    isComplete,
    handleChange,
  };
};
