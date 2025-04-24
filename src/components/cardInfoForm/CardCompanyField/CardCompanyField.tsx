import { useState } from 'react';
import Dropdown from '../../common/DropDown/Dropdown';

type CardCompanyName = (typeof CARD_COMPANY_NAMES)[number];

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

function CardCompanyField() {
  const [selectedCard, setSelectedCard] = useState<CardCompanyName | null>(
    null,
  );

  const onClickCardCompany = (name: CardCompanyName) => {
    setSelectedCard(name);
  };

  return (
    <Dropdown<CardCompanyName>
      placeholder={CARD_COMPANY_PLACEHOLDER}
      items={[...CARD_COMPANY_NAMES]}
      selectedValue={selectedCard}
      onClick={onClickCardCompany}
    />
  );
}

export default CardCompanyField;
