import { useEffect, useRef, useState } from 'react';

function useValidateForm() {
  const [isCardNumberValid, setIsCardNumberValid] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [isIssuerValid, setIsIssuerValid] = useState(false);
  const [isExpiryDateValid, setIsExpiryDateValid] = useState({
    month: false,
    year: false,
  });
  const [isCVCValid, setIsCVCValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const isTotalNumbersValid = isCardNumberValid.every((valid) => valid);
    const isTotalExpiryDateValid =
      isExpiryDateValid.month && isExpiryDateValid.year;
    const isTotalDataValid =
      isTotalNumbersValid &&
      isIssuerValid &&
      isTotalExpiryDateValid &&
      isCVCValid &&
      isPasswordValid;

    setIsDataValid(isTotalDataValid);
  }, [
    isCardNumberValid,
    isIssuerValid,
    isExpiryDateValid,
    isCVCValid,
    isPasswordValid,
    setIsDataValid,
  ]);

  return {
    isCardNumberValid,
    setIsCardNumberValid,
    isIssuerValid,
    setIsIssuerValid,
    isExpiryDateValid,
    setIsExpiryDateValid,
    isCVCValid,
    setIsCVCValid,
    isPasswordValid,
    setIsPasswordValid,
    isDataValid,
    ref,
  };
}

export default useValidateForm;
