import React, { useState } from "react";
import { CardCompany } from "../types/card";

function useCardCompany() {
  const [cardCompany, setCardCompany] = useState<CardCompany>("BC카드");

  const changeCompany = (company: CardCompany) => {
    setCardCompany(company);
  };

  return { cardCompany, changeCompany };
}

export default useCardCompany;
