export const validateCardNumbers = values => {
  const joinedCardNumbers = Object.values(values).join("");

  if (![15, 16].includes(joinedCardNumbers.length)) {
    return "카드번호는 15~16자로 구성되어야 합니다.";
  }

  if (joinedCardNumbers.match(/[\D]/)) {
    return "카드번호는 0-9 로만 구성되어야 합니다.";
  }

  return "";
};

export const validateExpirationDate = values => {
  const month = values["expiration-date-month"];
  const year = values["expiration-date-year"];
  const currentYear = new Date().getFullYear() - 2000;

  if (month.length !== 2) {
    return "만료일(월)은 2글자로 구성되어야 합니다.(ex: 01, 02, ... 12)";
  }

  if (Number(month) < 1 || Number(month) > 12) {
    return `만료일(월)이 유효하지 않습니다.`;
  }

  if (year.length !== 2) {
    return "만료일(년)은 2글자로 구성되어야 합니다.(ex: 21, 22, ... 25)";
  }

  if (Number(year) < currentYear || Number(year) > currentYear + 5) {
    return `만료일(년)은 현재로부터 5년이내만 입력할 수 있습니다.`;
  }

  return "";
};

export const validateOwnerName = name => {
  if (name.match(/[^가-힣|A-Z|\s]/)) {
    return "카드 소유자 이름은 한글, 알파벳, 공백문자로 이루어져야 합니다.";
  }

  if (name.length > 30) {
    return "카드 소유자 이름은 30자 이내여야 합니다.";
  }

  return "";
};

export const validateSecurityCode = code => {
  if (code.length < 3 || code.length > 4) {
    return "보안코드는 3글자 또는 4글자 여야 합니다.";
  }

  if (code.match(/[\D]/)) {
    return "보안코드는 한글, 알파벳, 공백문자로 이루어져야 합니다.";
  }

  return "";
};

export const validatePasswords = passwords => {
  const joinedPasswords = Object.values(passwords).join("");

  if (joinedPasswords.length !== 2) {
    return "카드 비밀번호를 2글자 모두 입력해주세요.";
  }

  if (joinedPasswords.match(/[\D]/)) {
    return "카드 비밀번호는 숫자로만 이루어져야 합니다.";
  }

  return "";
};
