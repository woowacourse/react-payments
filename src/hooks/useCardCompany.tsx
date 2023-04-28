import { useState } from "react";
import { CardCompany } from "../types/card";
import { DEFAULT_COMPANY } from "../abstract/constants";

function useCardCompany() {
  const [cardCompany, setCardCompany] = useState<CardCompany>(DEFAULT_COMPANY);

  const changeCompany = (company: CardCompany) => {
    setCardCompany(company);
  };

  return { cardCompany, changeCompany };
}

export default useCardCompany;
