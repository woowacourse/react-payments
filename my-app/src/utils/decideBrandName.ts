// 브랜드 이름
export const decideBrandName = (number: string) => {
  if (/^4/.test(number)) {
    return "visa";
  } else if (/^5[1-5]/.test(number)) {
    return "master";
  }
  return "";
};
