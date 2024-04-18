const inquireCardholderName = (cardholderName: string) => {
  const isEnglish = /^[a-zA-Z ]+$/.test(cardholderName);
  if (!isEnglish) {
    return '카드 소유자 이름을 영어로만 입력해주세요';
  }

  const containSideBlankOrMultipleBlanks = !/^(?:\S(?:\s\S*)?)?\S$/.test(cardholderName);
  if (containSideBlankOrMultipleBlanks) {
    return '양 끝에 공백이 포함되면 안 되며, 사이 공백의 길이는 최대 1입니다.';
  }

  return '';
};

export default inquireCardholderName;
