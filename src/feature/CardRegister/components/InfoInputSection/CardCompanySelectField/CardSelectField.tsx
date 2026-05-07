import { useState } from "react";
import CardCompanyOptionList from "./CardCompanyOptionList/CardCompanyOptionList";
import type { CardCompanyType } from "../../../../../common/types/CardCompany";

const CardCompanySelectField = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCardCompany, setSelectedCardCompany] = useState("");

  const handleCardCompanyClick = (cardCompany: CardCompanyType) => {
    if (selectedCardCompany !== cardCompany) {
      setSelectedCardCompany(cardCompany);
    }
  };

  const handleCardSelectClick = () => {
    setIsOpen((previous) => !previous);
  };
  return (
    <div>
      <button type="button" onClick={handleCardSelectClick}>
        카드사를 선택해주세요
      </button>

      {isOpen && (
        <CardCompanyOptionList
          handleCardCompanyClick={handleCardCompanyClick}
        />
      )}
    </div>
  );
};

export default CardCompanySelectField;
