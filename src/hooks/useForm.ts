import { useEffect, useState } from "react";

const useForm = () => {
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [isExpirationDateValid, setIsExpirationDateValid] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
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

  const handleUserNameValidation = (isValid: boolean) => {
    setIsUserNameValid(isValid);
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
        isUserNameValid &&
        isCardCompanyValid &&
        isCardCVCValid &&
        isCardPasswordValid
    );
  }, [
    isCardNumberValid,
    isExpirationDateValid,
    isUserNameValid,
    isCardCompanyValid,
    isCardCVCValid,
    isCardPasswordValid,
  ]);

  return {
    isCardNumberValid,
    isExpirationDateValid,
    isUserNameValid,
    isCardCompanyValid,
    isCardCVCValid,
    isSubmitEnabled,
    handleCardNumberValidation,
    handleExpirationDateValidation,
    handleUserNameValidation,
    handleCardCompanyValidation,
    handleCardCVCValidation,
    handleCardPasswordValidation,
  };
};

export default useForm;
