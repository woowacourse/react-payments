import { useRef, useState } from 'react';

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
  const ref = useRef<HTMLFormElement>(null);

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
    ref,
  };
}

export default useValidateForm;
