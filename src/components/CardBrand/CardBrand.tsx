import Title from "../@common/Title/Title";
import Dropdown from "../@common/Dropdown/Dropdown";
import { ChangeEvent } from "react";
import {CardBrandType} from "../../types";
import {cardPeriodInputLayout} from "../CardPeriod/CardPeriodInput.style";

type CardBrandProps = {
  value: CardBrandType | null;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  brandRef: React.RefObject<HTMLSelectElement | null>;
  options: CardBrandType[];
  placeholder?: string;
  tabIndex: number;
}

function CardBrand({value, onChange, brandRef, options, placeholder, tabIndex}: CardBrandProps) {
  return (
    <div css={cardPeriodInputLayout}>
      <Title title='카드사를 선택해 주세요' subTitle='현재 국내 카드사만 가능합니다.'/>
      <Dropdown
        ref={brandRef}
        options={options}
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </div>
  );
}

export default CardBrand;
