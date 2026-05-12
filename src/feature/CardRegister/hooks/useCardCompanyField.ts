import { useState } from 'react';
import type { CardCompanyId } from '../../../common/types/CardPreview';
import { CARD_COMPANIES } from '../constant/CARD_BRANDS';

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
