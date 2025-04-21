import Dropdown from '../common/Dropdown/Dropdown';
import Spacing from '../common/Spacing/Spacing';
import Title from '../common/Title/Title';

export type CardBrandType = (typeof CARD_BRAND_LIST)[number];

interface CardBrandProps {
  CardBrandType: CardBrandType | null;
  setCardBrandType: React.Dispatch<React.SetStateAction<CardBrandType | null>>;
}

const CARD_BRAND_LIST = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;
export default function CardBrand({ CardBrandType, setCardBrandType }: CardBrandProps) {
  const handleDropdownChange = (value: CardBrandType) => {
    setCardBrandType(value);
  };
  return (
    <div>
      <Title description="현재 국내 카드사만 가능합니다.">카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Dropdown
        SelectedValue={CardBrandType}
        defaultValue="카드사를 선택해주세요."
        dropdownList={CARD_BRAND_LIST}
        onClick={handleDropdownChange}
      />
      <Spacing size={8} />
    </div>
  );
}
