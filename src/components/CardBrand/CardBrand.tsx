import Dropdown from "../@common/Dropdown/Dropdown";
import Title from "../@common/Title/Title";
import {cardPeriodInputLayout} from "../CardPeriod/CardPeriodInput.style.ts";

const cardBrand = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

function CardBrand() {
  return (
    <div css={cardPeriodInputLayout}>
      <Title title='카드사를 선택해 주세요' subTitle='현재 국내 카드사만 가능합니다.'/>
      <Dropdown options={cardBrand} />
    </div>
  );
}

export default CardBrand;
