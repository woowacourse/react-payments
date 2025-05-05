import { useState } from 'react';

export type CardCompanyName = (typeof CARD_COMPANY_NAMES)[number];
export type CardCompanyColor =
  (typeof CARD_COMPANY_COLORS)[keyof typeof CARD_COMPANY_COLORS];

const CARD_COMPANY_COLORS = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
  기본: '#333333',
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

const useCardCompany = ({ onComplete }: { onComplete: () => void }) => {
  const [selectedCard, setSelectedCard] = useState<CardCompanyName | null>(
    null,
  );

  const onClickCardCompany = (name: CardCompanyName) => {
    setSelectedCard(name);

    if (name === null) {
      return;
    }

    onComplete();
  };

  return {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS:
      selectedCard === null
        ? CARD_COMPANY_COLORS['기본']
        : CARD_COMPANY_COLORS[selectedCard],
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
    isCardCompanyValid: selectedCard !== null,
  };
};

export default useCardCompany;
