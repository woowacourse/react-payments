import { SelectCSS } from "./CardBrandInput.styled";

interface CardBrandInputProps {
  value: string;
  handleCardBrandChange: (value: string) => void;
}

function CardBrandInput({ value, handleCardBrandChange }: CardBrandInputProps) {
  return (
    <SelectCSS
      value={value}
      onChange={(e) => handleCardBrandChange(e.target.value)}
      required
    >
      <option value="" hidden>
        카드사를 선택하세요
      </option>
      <option value="BC카드">BC카드</option>
      <option value="신한카드">신한카드</option>
      <option value="카카오뱅크">카카오뱅크</option>
      <option value="현대카드">현대카드</option>
      <option value="우리카드">우리카드</option>
      <option value="롯데카드">롯데카드</option>
      <option value="하나카드">하나카드</option>
      <option value="국민카드">국민카드</option>
    </SelectCSS>
  );
}

export default CardBrandInput;
