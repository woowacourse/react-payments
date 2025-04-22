import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../../constants/constants";
import { CardValidationType } from "../../../../hooks/useCardValidation";
import Select from "../../../Common/Select/Select";
import { useCard } from "../../../../hooks/useCard";
import { isCardCompanyState } from "../../../../utils/typeGuard";

const cardCompanyOptions = [
  { value: "bc", text: "BC카드" },
  { value: "shinhan", text: "신한카드" },
  { value: "kakaobank", text: "카카오뱅크" },
  { value: "hyundai", text: "현대카드" },
  { value: "woori", text: "우리카드" },
  { value: "lotte", text: "롯데카드" },
  { value: "hana", text: "하나카드" },
  { value: "kb", text: "국민카드" },
];

const PLACEHOLDER = "카드사를 선택해 주세요";

export interface CardCompanySelectProps {
  cardCompanyError: CardValidationType["cardCompany"];
  validateCardCompany: (value: string) => void;
}

export default function CardCompanySelect({
  cardCompanyError,
  validateCardCompany,
}: CardCompanySelectProps) {
  const { cardCompany, updateCardCompany } = useCard();

  const handleCardCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!isCardCompanyState(value)) return;

    validateCardCompany(value);
    updateCardCompany(value);
  };

  return (
    <Select
      key={CARD_FORM_TYPE.cardCompany}
      isError={cardCompanyError}
      placeholder={PLACEHOLDER}
      options={cardCompanyOptions}
      value={cardCompany}
      onChange={handleCardCompanyChange}
    />
  );
}
