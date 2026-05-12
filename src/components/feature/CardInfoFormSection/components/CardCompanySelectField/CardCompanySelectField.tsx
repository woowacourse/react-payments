import useFormValue from "@/components/common/FormContainer/useFormValue";
import SelectField from "@components/common/SelectField";
import { default as CARD } from "@constants/card";

import type { CardInfoFormState } from "../../formState";

type CardCompanySelectFieldOption = (typeof CARD.COMPANY_SELECT_FIELD)[number];

interface CardCompanySelectFieldProps {
  onComplete?: () => void;
}

const CardCompanySelectField = ({ onComplete }: CardCompanySelectFieldProps) => {
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const selectedCompany = getValue("selectedCardCompany");

  return (
    <>
      <SelectField<CardCompanySelectFieldOption["value"]>
        title="카드사를 선택해 주세요"
        caption="현재 국내 카드사만 가능합니다."
        options={[...CARD.COMPANY_SELECT_FIELD]}
        placeholder="카드사를 선택해주세요"
        value={selectedCompany}
        onChange={(next) => {
          setValue("selectedCardCompany", next);
          onComplete?.();
        }}
      />
      <input
        type="hidden"
        name="card-company"
        value={selectedCompany ?? ""}
        readOnly
      />
    </>
  );
};

export default CardCompanySelectField;
