import Dropdown from '../../../components/Dropdown/Dropdown';
import Spacing from '../../../components/Spacing/Spacing';
import Title from '../../../components/Title/Title';
import { CardBrandProps } from './type';

export const CARD_BRAND_LIST = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;
export default function CardBrand({ cardBrandTypeState, handleDropdownChange }: CardBrandProps) {
  return (
    <div>
      <Title description="현재 국내 카드사만 가능합니다.">카드사를 선택해 주세요</Title>
      <Spacing size={24} />
      <Dropdown
        SelectedValue={cardBrandTypeState}
        defaultValue="카드사를 선택해주세요."
        dropdownList={CARD_BRAND_LIST}
        onClick={handleDropdownChange}
      />
      <Spacing size={8} />
    </div>
  );
}
