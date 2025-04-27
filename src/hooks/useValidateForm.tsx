import { useEffect, useRef, useState } from 'react';

function useValidateForm() {
  const [isCardNumberValid, setIsCardNumberValid] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
  const [isIssuerValid, setIsIssuerValid] = useState(false);
  const [isExpiryDateValid, setIsExpiryDateValid] = useState({
    month: true,
    year: true,
  });
  const [isCVCValid, setIsCVCValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
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
