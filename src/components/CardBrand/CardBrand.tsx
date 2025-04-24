import Title from "../@common/Title/Title";
import Dropdown from "../@common/Dropdown/Dropdown";
import { ChangeEvent } from "react";
import { CardBrands, CardBrandType } from "../../types";
import { cardPeriodInputLayout } from "../CardPeriod/CardPeriodInput.style";

const cardBrandOptions: CardBrandType[]  = Object.values(CardBrands);

type CardBrandProps = {
  value: CardBrandType | null;
  onChange: (brand: CardBrandType | null) => void;
}

function CardBrand({value, onChange}: CardBrandProps) {
  const handleChangeCardBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value as CardBrandType;
    onChange(selectedBrand || null);
  }

  return (
    <div css={cardPeriodInputLayout}>
      <Title title='카드사를 선택해 주세요' subTitle='현재 국내 카드사만 가능합니다.' />
      <Dropdown
        options={cardBrandOptions}
        value={value ?? ''}
        onChange={handleChangeCardBrand}
      />
    </div>
  );
}

export default CardBrand;
