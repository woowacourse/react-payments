import { useEffect, useState } from "react";

const useForm = () => {
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [isExpirationDateValid, setIsExpirationDateValid] = useState(false);
  const [isCardOwnerValid, setIsCardOwnerValid] = useState(false);
  const [isCardCompanyValid, setIsCardCompanyValid] = useState(false);
  const [isCardCVCValid, setIsCardCVCValid] = useState(false);
  const [isCardPasswordValid, setIsCardPasswordValid] = useState(false);

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleCardNumberValidation = (isValid: boolean) => {
    setIsCardNumberValid(isValid);
  };

  const handleExpirationDateValidation = (isValid: boolean) => {
    setIsExpirationDateValid(isValid);
  };

  const handleCardOwnerValidation = (isValid: boolean) => {
    setIsCardOwnerValid(isValid);
  };

  const handleCardCompanyValidation = (isValid: boolean) => {
    setIsCardCompanyValid(isValid);
  };

  const handleCardCVCValidation = (isValid: boolean) => {
    setIsCardCVCValid(isValid);
  };

  const handleCardPasswordValidation = (isValid: boolean) => {
    setIsCardPasswordValid(isValid);
  };

  useEffect(() => {
    setIsSubmitEnabled(
      isCardNumberValid &&
        isExpirationDateValid &&
        isCardOwnerValid &&
        isCardCompanyValid &&
        isCardCVCValid &&
        isCardPasswordValid
    );
  }, [
    isCardNumberValid,
    isExpirationDateValid,
    isCardOwnerValid,
    isCardCompanyValid,
    isCardCVCValid,
    isCardPasswordValid,
  ]);

  return {
    isCardNumberValid,
    isExpirationDateValid,
    isCardOwnerValid,
    isCardCompanyValid,
    isCardCVCValid,
    isSubmitEnabled,
    handleCardNumberValidation,
    handleExpirationDateValidation,
    handleCardOwnerValidation,
    handleCardCompanyValidation,
    handleCardCVCValidation,
    handleCardPasswordValidation,
  };
};

export default useForm;
