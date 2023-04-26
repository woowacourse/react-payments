import { REGEX } from "../constants";

export const validateNumber = (value: string) => {
  if (value.length === 0) return "";
  if (!REGEX.number.test(value.replace(" - ", "")))
    return "숫자만 입력해 주세요.";
};

export const validateExpiredDate = (value: string) => {
  const today = new Date();
  const [month, year] = value.split(" / ");
  const monthNumber = Number(month.replace("0", ""));
  const yearNumber = Number("20" + year);

  if (!month) return "";
  if (monthNumber < 1 || monthNumber > 12)
    return "유효한 달(월)을 입력해 주세요.";
  if (!year) return "";
  if (yearNumber < today.getFullYear() || yearNumber > today.getFullYear() + 10)
    return "유효한 년(해)을 입력해 주세요.";
  if (yearNumber === today.getFullYear() && monthNumber < today.getMonth())
    return "만료일이 지난 카드입니다.";
};

export const validateOwnerName = (value: string) => {
  if (value.length === 0) return "";
  if (!REGEX.english.test(value.replace(" - ", "")))
    return "영어만 입력해 주세요.";
};
