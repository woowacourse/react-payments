import { useState } from 'react';

export type CardCompanyName = (typeof CARD_COMPANY_NAMES)[number];

const CARD_COMPANY_COLORS = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
} as const;

const CARD_COMPANY_NAMES = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

const CARD_COMPANY_PLACEHOLDER = '카드사를 선택해주세요';

export const useCardCompany = () => {
  const [selectedCard, setSelectedCard] = useState<CardCompanyName | null>(
    null,
  );

  const onClickCardCompany = (name: CardCompanyName) => {
    setSelectedCard(name);
  };

  return {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
  };
};
