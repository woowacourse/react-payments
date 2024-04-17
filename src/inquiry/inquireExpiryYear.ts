const inquireExpiryYear = (expiryYear: string) => {
  const isValidLength = expiryYear.length === 0 || expiryYear.length === 2;
  const isValidYear = Number(expiryYear) > 23 && Number(expiryYear) < 41;

  if (!isValidLength) {
    return '년도(年) : 2자리로 입력해주세요';
  }

  if (!isValidYear) {
    return '년도(年) : 24년도부터 40년도 중 하나로 입력해주세요';
  }

  return '';
};

export default inquireExpiryYear;
