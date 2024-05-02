import { useState, useEffect } from "react";
import { CardCompany } from "../types/card";

interface UseCardCompanyFormProps {
  cardCompany: CardCompany | null;
  setCardCompany: React.Dispatch<React.SetStateAction<CardCompany | null>>;
  onValidation: (isValid: boolean) => void;
  onFocus: (field: string) => void;
}

const useCardCompanyForm = ({
  cardCompany,
  setCardCompany,
  onValidation,
  onFocus,
}: UseCardCompanyFormProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  useEffect(() => {
    if (cardCompany) onValidation(true);
  }, [cardCompany, onValidation]);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value as CardCompany;

    setCardCompany(currentValue);
  };

  return { isFocused, handleFocus, handleCompanyChange };
};

export default useCardCompanyForm;
