import { useState } from "react";
import { CardCompany } from "../types/type";

interface CardCompanyState {
  value: CardCompany | "";
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

interface CardCompanyInputResult {
  CardCompanyState: CardCompanyState;
  handleCardCompanyChange: (value: string) => void;
}

function useCardCompanyInput(): CardCompanyInputResult {
  const [cardCompanyState, setCardCompanyState] = useState<CardCompanyState>({
    value: "",
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

  return { CardCompanyState: cardCompanyState, handleCardCompanyChange };
}

export default useCardCompanyInput;
