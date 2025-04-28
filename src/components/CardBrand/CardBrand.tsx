import Title from "../@common/Title/Title";
import Dropdown from "../@common/Dropdown/Dropdown";
import {CardBrands, CardBrandType} from "../../types";
import {cardPeriodInputLayout} from "../CardPeriod/CardPeriodInput.style";

const cardBrandOptions: CardBrandType[] = Object.values(CardBrands);

type CardBrandProps = {
  value: CardBrandType | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  brandRef: React.RefObject<HTMLSelectElement>;
  tabIndex: number;
}

function CardBrand({value, onChange, brandRef, tabIndex}: CardBrandProps) {

  return (
    <div css={cardPeriodInputLayout}>
      <Title title='카드사를 선택해 주세요' subTitle='현재 국내 카드사만 가능합니다.'/>
      <Dropdown
        ref={brandRef}
        options={cardBrandOptions}
        value={value ?? ''}
        onChange={onChange}
        tabIndex={tabIndex}
      />
    </div>
  );
}

export default CardBrand;
