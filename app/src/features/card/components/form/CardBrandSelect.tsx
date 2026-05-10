import styled from "@emotion/styled";

interface CardBrandSelectProps {
  cardBrand: string | null;
  setCardBrand: (value: string) => void;
}

export default function CardBrandSelect({ cardBrand, setCardBrand }: CardBrandSelectProps) {
  const changeCardBrand = (value: string) => {
    setCardBrand(value);
  };

  return (
    <Select
      defaultValue={cardBrand ?? ""}
      onChange={(e) => changeCardBrand(e.target.value)}
      aria-label="select card brand"
      id="card-brand-select"
    >
      <option value="" disabled hidden>
        카드사를 선택해주세요.
      </option>
      <option value="bc">BC카드</option>
      <option value="sinhan">신한카드</option>
      <option value="kakao">카카오뱅크</option>
      <option value="hyundai">현대카드</option>
      <option value="woori">우리카드</option>
      <option value="lotte">롯데카드</option>
      <option value="hana">하나카드</option>
      <option value="kookmin">국민카드</option>
    </Select>
  );
}

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px;
`;
