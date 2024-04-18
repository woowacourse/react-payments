export const validateExpirationDate = (date: string[]) => {
  const [month, year] = date.map(Number);
  if ((month && month < 1) || (month && month > 12)) {
    return "월을 유효한 2자리수로 입력해 주세요.";
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
