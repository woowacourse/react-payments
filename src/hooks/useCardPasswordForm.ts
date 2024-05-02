import { useEffect, useState } from "react";

interface UseCardPasswordFormProps {
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  onValidation: (isValid: boolean) => void;
  onFocus: (field: string | null) => void;
}

const useCardPasswordForm = ({ onFocus, setIsFocused, onValidation }: UseCardPasswordFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({
    0: false,
  });

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    if (onValidation && inputValidity[0]) {
      onValidation(true);
      setErrorMessage("");
    }
    if (onValidation && !inputValidity[0]) {
      onValidation(false);
      setErrorMessage("2자리 수를 입력하세요.");
    }
  }, [inputValidity]);

  return { errorMessage, setErrorMessage, updateInputValidity, handleFocus };
};

export default useCardPasswordForm;
