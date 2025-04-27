import { ChangeEvent } from "react";
import {
  CARD_COMPANY_INFO,
  CARD_FORM_TYPE,
  PLACEHOLDER,
} from "../../../../constants/card";
import { useCard } from "../../../../hooks/useCard";
import { useCardValidation } from "../../../../hooks/useCardValidation";
import { isCardCompanyState } from "../../../../utils/typeGuard";
import Select from "../../../Common/Select/Select";
import { CardFormFieldStyles } from "../CardFormFields.styled";

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
        placeholder={PLACEHOLDER.cardCompany}
        options={CARD_COMPANY_INFO}
        value={cardCompany}
        onChange={handleCardCompanyChange}
        onBlur={handleCardCompanyChange}
        autoFocus
      />
    </CardFormFieldStyles>
  );
}
