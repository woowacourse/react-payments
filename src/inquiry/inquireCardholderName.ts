const inquireCardholderName = (cardholderName: string) => {
  const isEnglish = /^[a-zA-Z]*$/.test(cardholderName);
  if (!isEnglish) {
    return '카드 소유자 이름은 영어로 입력해주세요';
  }
  return '';
};

export default inquireCardholderName;
