import SelectField from "@components/common/SelectField";

import CARD_COMPANY_SELECT_FIELD from "./constants";

type CardCompanySelectFieldOption = (typeof CARD_COMPANY_SELECT_FIELD)[number];

interface CardCompanySelectFieldProps {
  selectedCompany: CardCompanySelectFieldOption["value"] | null;
  onChange: (company: CardCompanySelectFieldOption["value"]) => void;
}

const CardCompanySelectField = ({
  selectedCompany,
  onChange,
}: CardCompanySelectFieldProps) => {
  return (
    <SelectField<CardCompanySelectFieldOption["value"]>
      title="카드사를 선택해 주세요"
      caption="현재 국내 카드사만 가능합니다."
      options={[...CARD_COMPANY_SELECT_FIELD]}
      placeholder="카드사를 선택해주세요"
      value={selectedCompany}
      onChange={(next) => onChange(next)}
    />
  );
};

export default CardCompanySelectField;
