export const validateExpirationDate = (date: string[]) => {
  const [month, year] = date.map(Number);
  if (!(month >= 1 && month <= 12)) {
    return "1~12월 범위의 월을 입력해 주세요.";
  }
  const today = new Date();

  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear() - 2000;

  if (year && month) {
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "이미 만료된 카드입니다.";
    }
  }

  return "";
};

export const validateOwnerName = (name: string[]) => {
  const alphabetRegex = /^[a-zA-Z\s]*$/;
  if (!alphabetRegex.test(name[0])) {
    console.log("error");
    return "이름은 영어 대문자로 입력해 주세요.";
  }
  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name[0])) {
    return "이름의 공백은 2회이상 연속되지 않아야 합니다.";
  }
  return "";
};
