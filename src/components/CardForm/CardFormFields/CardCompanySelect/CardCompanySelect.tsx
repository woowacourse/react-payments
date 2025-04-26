import { ChangeEvent } from "react";
import {
  CARD_COMPANY_INFO,
  CARD_FORM_TYPE,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import { isCardCompanyState } from "../../../../utils/typeGuard";
import Select from "../../../Common/Select/Select";
import { CardFormFieldStyles } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

const PLACEHOLDER = "카드사를 선택해 주세요";

export default function CardCompanySelect() {
  const { cardCompany, updateCardCompany } = useCard();
  const { cardCompanyError, validateCardCompany } = useCardValidation();

  const handleCardCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!isCardCompanyState(value)) return;

    validateCardCompany(value);
    updateCardCompany(value);
  };

  return (
    <CardFormFieldStyles>
      <Select
        key={CARD_FORM_TYPE.cardCompany}
        isError={cardCompanyError.hasError}
        placeholder={PLACEHOLDER}
        options={CARD_COMPANY_INFO}
        value={cardCompany}
        onChange={handleCardCompanyChange}
        onBlur={handleCardCompanyChange}
        autoFocus
      />
    </CardFormFieldStyles>
  );
}
