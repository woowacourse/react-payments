// 카드 번호를 검증하는 룬 알고리즘을 이용한 검증 로직
export const luhnValidation = (cardNumber: string) => {
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

export const validateCardNumber = (cardNumberArray: string[]) => {
  const cardNumber = cardNumberArray.join('');

  if (cardNumber.length === 0) {
    return undefined;
  }

  if (cardNumber.length !== 16) {
    return '카드 번호는 16자리로 입력해주세요.';
  }

  if (!luhnValidation(cardNumber)) {
    return '잘못된 카드번호입니다.';
  }
  return undefined;
};

export const validateExpireDate = (inputMonth: string, inputYear: string) => {
  const date = new Date();

  if (inputMonth.length === 0 || inputYear.length === 0) {
    return undefined;
  }

  if (inputMonth.length < 2 || inputYear.length < 2) {
    return '각 값은 두글자로 입력해주세요.';
  }
  if (Number(inputMonth) > 12 || Number(inputMonth) === 0) {
    return '1월 부터 12월 까지 입력해주세요.';
  }
  if (Number(inputYear) < 23 || Number(inputMonth) < date.getMonth() + 1) {
    return '만료된 카드입니다.';
  }

  return undefined;
};

export const validateSecurityCode = (securityValue: string) => {
  if (securityValue.length === 0) {
    return undefined;
  }

  if (securityValue.length !== 3) {
    return '보안 코드는 3글자로 입력해주세요.';
  }
  return undefined;
};
