import Field from "@/components/layout/Field/Field";
import Select from "@/components/common/Select/Select";
import { ChangeEvent, RefObject } from "react";
import { CARD_COMPANIES } from "@/constants/cardInfo";

interface CardCompanyProps {
  cardCompany: string;
  cardCompanyRef: RefObject<HTMLSelectElement>;
  changeCardCompany: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CardCompany = ({ cardCompany, cardCompanyRef, changeCardCompany }: CardCompanyProps) => {
  return (
    <Field
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다."
      labelText=""
      errorMessage=""
    >
      <Select
        options={CARD_COMPANIES}
        value={cardCompany}
        changeCardCompany={changeCardCompany}
        selectRef={cardCompanyRef}
      />
    </Field>
  );
};

export default CardCompany;
