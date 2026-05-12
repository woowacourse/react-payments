import { useState } from 'react';
import {
  CARD_COMPANIES,
  type CardCompanyId,
} from '../constant/cardCompanies';

type UseCardCompanyFieldParams = {
  onComplete?: () => void;
};

export type CardCompanyFieldType = ReturnType<typeof UseCardCompanyField>;

export const UseCardCompanyField = ({
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
