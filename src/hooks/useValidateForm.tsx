import { useRef, useState } from 'react';

function useValidateForm() {
  const [isCardNumberValid, setIsCardNumberValid] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
  const [isExpiryDateValid, setIsExpiryDateValid] = useState({
    month: true,
    year: true,
  });
  const [isCVCValid, setIsCVCValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const isTotalNumbersValid = isCardNumberValid.every((valid) => valid);
  const isTotalExpiryDateValid =
    isExpiryDateValid.month && isExpiryDateValid.year;
  const isTotalDataValid =
    isTotalNumbersValid &&
    isTotalExpiryDateValid &&
    isCVCValid &&
    isPasswordValid;

  const ref = useRef<HTMLFormElement>(null);
  function isFormValid() {
    return isTotalDataValid && ref.current && ref.current.checkValidity();
  }

  return {
    isCardNumberValid,
    setIsCardNumberValid,
    isExpiryDateValid,
    setIsExpiryDateValid,
    isCVCValid,
    setIsCVCValid,
    isPasswordValid,
    setIsPasswordValid,
    isFormValid,
    ref,
  };
}

export default useValidateForm;
