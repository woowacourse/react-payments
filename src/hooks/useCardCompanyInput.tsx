import { useState } from "react";
import { CardCompany } from "../types/type";

interface CardCompanyState {
  value: CardCompany;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCardCompanyInput(): [CardCompanyState, (value: string) => void] {
  const [cardCompanyState, setCardCompanyState] = useState<CardCompanyState>({
    value: "" as CardCompany,
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardCompanyChange = (value: string) => {
    const errorMessage = [""];
    const isValid = !!value;
    const isNextVisible = cardCompanyState.isNextVisible || isValid;

    setCardCompanyState((prevState) => ({
      ...prevState,
      value: value as CardCompany,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [cardCompanyState, handleCardCompanyChange];
}

export default useCardCompanyInput;
