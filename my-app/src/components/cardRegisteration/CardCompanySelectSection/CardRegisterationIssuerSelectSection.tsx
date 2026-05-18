import Select from "react-select";

import { ISSUERS, type IssuerCode } from "../../../constants/issuers.ts";
import InputSectionLayout from "../../common/InputSectionLayout/InputSectionLayout.tsx";

type CardRegisterationIssuerSelectSectionProps = {
  onSelect: (issuerCode: IssuerCode) => void;
};

const ISSUER_OPTIONS = Object.entries(ISSUERS).map(([value, { label }]) => ({
  value: value as IssuerCode,
  label,
}));

const CardRegisterationIssuerSelectSection = ({ onSelect }: CardRegisterationIssuerSelectSectionProps) => {
  return (
    <InputSectionLayout title="카드사를 선택해 주세요" message="현재 국내 카드사만 가능합니다.">
      <Select
        autoFocus
        options={ISSUER_OPTIONS}
        onChange={(option) => option && onSelect(option.value)}
        placeholder="카드사를 선택해주세요"
        styles={{
          placeholder: (base) => ({ ...base, opacity: 0.55 }),
        }}
      />
    </InputSectionLayout>
  );
};

export default CardRegisterationIssuerSelectSection;
