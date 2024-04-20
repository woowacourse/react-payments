// 연속된 공백을 하나로 통합하고, 시작부분의 공백을 제거하는 함수
const normalizeSpaces = (str: string): string => {
  return str.replace(/\s+/g, ' ').trimStart();
};

export default normalizeSpaces;
