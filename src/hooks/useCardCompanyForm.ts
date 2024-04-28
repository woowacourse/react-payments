import { useState, useEffect } from "react";

interface UseCardCompanyFormProps {
  cardCompany: string[] | undefined;
  setCardCompany: React.Dispatch<React.SetStateAction<string[]>> | undefined;
  onValidation: (isValid: boolean) => void;
  onFocus: (field: string | null) => void;
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
    if (cardCompany) onValidation(cardCompany[0] !== "");
  }, [cardCompany, onValidation]);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany && setCardCompany([e.target.value]);
  };

  return { isFocused, handleFocus, handleCompanyChange };
};

export default useCardCompanyForm;
