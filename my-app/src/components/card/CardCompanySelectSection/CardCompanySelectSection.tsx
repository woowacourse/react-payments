import Select from "react-select";

import { CARD_COMPANIES, type CardCompany } from "../../../constants/cardCompany";
import InputSectionLayout from "../../common/InputSectionLayout/InputSectionLayout";

type CardCompanySelectorSectionProps = {
  onSelect: (company: CardCompany) => void;
};

const CARD_COMPANY_OPTIONS = Object.entries(CARD_COMPANIES).map(([value, { label }]) => ({
  value: value as CardCompany,
  label,
}));

const CardCompanySelectorSection = ({ onSelect }: CardCompanySelectorSectionProps) => {
  return (
    <InputSectionLayout title="카드사를 선택해 주세요" message="현재 국내 카드사만 가능합니다.">
      <Select
        autoFocus
        options={CARD_COMPANY_OPTIONS}
        onChange={(option) => option && onSelect(option.value)}
        placeholder="카드사를 선택해주세요"
        styles={{
          placeholder: (base) => ({ ...base, opacity: 0.55 }),
        }}
      />
    </InputSectionLayout>
  );
};

export default CardCompanySelectorSection;
