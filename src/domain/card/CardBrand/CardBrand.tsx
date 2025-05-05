import Dropdown from '../../../components/Dropdown/Dropdown';
import Spacing from '../../../components/Spacing/Spacing';
import Title from '../../../components/Title/Title';
import { useCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';
import { CARD_BRAND_LIST } from './constants';

export default function CardBrand() {
  const { cardBrandTypeState, handleDropdownChange } = useCardFormContext();

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
