import { useEffect, useState } from 'react';

const luhnValidation = (cardNumber: string) => {
  let nCheck = 0,
    bEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let cDigit = cardNumber.charAt(i),
      nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
};

const useValidation = (inputValue: string[] | string, type: 'cardNumber' | 'expireDate' | 'cvc') => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateCardNumber = (cardNumberArray: string[]) => {
    const cardNumber = cardNumberArray.join('');

    if (cardNumber.length === 0) {
      setErrorMessage(undefined);
      return;
    }

    if (cardNumber.length !== 16) {
      setErrorMessage('카드 번호는 16자리로 입력해주세요.');
      return;
    }

    if (!luhnValidation(cardNumber)) {
      setErrorMessage('잘못된 카드번호입니다.');
      return;
    }
    setErrorMessage(undefined);
  };

  const validateExpireDate = (inputMonth: string, inputYear: string) => {
    const date = new Date();

    if (inputMonth.length === 0 || inputYear.length === 0) {
      setErrorMessage(undefined);
      return;
    }

    if (inputMonth.length < 2 || inputYear.length < 2) {
      setErrorMessage('각 값은 두글자로 입력해주세요.');
      return;
    }
    if (Number(inputMonth) > 12 || Number(inputMonth) === 0) {
      setErrorMessage('1월 부터 12월 까지 입력해주세요.');
      return;
    }
    if (Number(inputYear) < 23 || Number(inputMonth) < date.getMonth() + 1) {
      setErrorMessage('만료된 카드입니다.');
      return;
    }

    setErrorMessage(undefined);
  };

  const validateSecurityCode = (securityValue: string) => {
    if (securityValue.length === 0) {
      setErrorMessage(undefined);
      return;
    }

    if (securityValue.length !== 3) {
      setErrorMessage('보안 코드는 3글자로 입력해주세요.');
      return;
    }
    setErrorMessage(undefined);
  };

  useEffect(() => {
    if (type === 'cardNumber' && Array.isArray(inputValue)) {
      validateCardNumber(inputValue);
      return;
    }
    if (type === 'expireDate') {
      validateExpireDate(inputValue[0], inputValue[1]);
      return;
    }
    if (type === 'cvc' && typeof inputValue === 'string') {
      validateSecurityCode(inputValue);
      return;
    }
  }, [inputValue, type]);

  return { errorMessage };
};

export default useValidation;
