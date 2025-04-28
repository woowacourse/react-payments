import { CARD_COMPANIES } from "../../constants/constants";
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
      {CARD_COMPANIES.map((company) => (
        <option key={company} value={company}>
          {company}
        </option>
      ))}
    </SelectCSS>
  );
}

export default CardBrandInput;
