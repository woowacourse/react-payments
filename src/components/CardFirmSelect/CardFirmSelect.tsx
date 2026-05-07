import styled from "@emotion/styled";

// BC카드 #F04651
// 신한카드 #0046FF
// 카카오뱅크 #FFE600
// 현대카드 #000000
// 우리카드 #007BC8
// 롯데카드 #ED1C24
// 하나카드 #009490
// 국민카드 #6A6056

interface Props {
  cardFrimCategory: string;
  onChangeCardFirmCategory: (value: string) => void;
  value: string;
}

export default function CardFirmSelect({
  cardFrimCategory,
  onChangeCardFirmCategory,
}: Props) {
  return (
    <div>
      <SelectCardFrim
        value={cardFrimCategory}
        onChange={(e) => onChangeCardFirmCategory(e.target.value)}
        name="cardfirm-select"
        className="restaurant-filter"
      >
        <option value="placeholder">카드사를 선택해주세요</option>
        <option value="BC">BC카드</option>
        <option value="신한">신한카드</option>
        <option value="카뱅">카카오뱅크</option>
        <option value="현대">현대카드</option>
        <option value="우리">우리카드</option>
        <option value="롯데">롯데카드</option>
        <option value="하나">하나카드</option>
        <option value="국민">국민카드</option>
      </SelectCardFrim>
    </div>
  );
}

const SelectCardFrim = styled.select`
  &:has(option[value="placeholder"]:checked) {
    color: #acacac;
  }
  width: 315px;
  height: 31.28px;
`;
