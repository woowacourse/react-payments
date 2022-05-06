export const removeWhiteSpaces = (str: string) => str.replace(/\s/g, '');

export const isNum = (str: string) => removeWhiteSpaces(str) && !Number.isNaN(Number(str));

export const isEnglish = (str: string) => !/[^A-Za-z]/.test(str);

export const transformNumToBullet = (str: string) => '•'.repeat(str.length);

export const transformToColor = (str: string) => {
  switch (str) {
    case '빨강카드':
      return '#EB1100';
    case '노랑카드':
      return '#F59001';
    case '주황카드':
      return '#F5ED00';
    case '초록카드':
      return '#12DB00';
    case '파랑카드':
      return '#0107EB';
    case '보라카드':
      return '#A000EB';
    default:
      return '#ffffff';
  }
};
