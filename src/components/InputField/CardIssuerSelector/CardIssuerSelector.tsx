import { Dispatch, SetStateAction } from 'react';
import { CardIssuerSelectorType } from '../../../config/inputField';
import Selector from '../../Selector/Selector';

interface CardIssuerSelectorProps {
  setCardIssuer: Dispatch<SetStateAction<CardIssuerSelectorType | null>>;
}

function CardIssuerSelector({ setCardIssuer }: CardIssuerSelectorProps) {
  const cardIssuers: Record<string, CardIssuerSelectorType> = {
    bc: 'BC카드',
    shinhan: '신한카드',
    kakaobank: '카카오뱅크',
    hyundai: '현대카드',
    woori: '우리카드',
    lotte: '롯데카드',
    hana: '하나카드',
    kb: '국민카드',
  } as const;

  return (
    <Selector
      dropDownOptions={cardIssuers}
      placeholder="카드사를 선택해주세요"
      onSelectChange={(value: CardIssuerSelectorType) => setCardIssuer(value)}
    />
  );
}

export default CardIssuerSelector;
