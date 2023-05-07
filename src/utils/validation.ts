import { CARD_INPUT_LENGTH, REGEX } from "../constants";
import { CardType } from "../types";

export const validateCardNumber = (value: string) => {
  if (!REGEX.number.test(value.replaceAll(" - ", "")))
    return "숫자만 입력해 주세요.";
  if (value.length !== CARD_INPUT_LENGTH.cardNumber)
    return "카드번호 16자리를 모두 입력해 주세요.";
  return "";
};

export const validateExpiredDate = (value: string) => {
  const today = new Date();
  const [month, year] = value.split(" / ");
  const monthNumber = Number(month.replace("0", ""));
  const yearNumber = Number("20" + year);

  if (!REGEX.number.test(value.replaceAll(" / ", "")))
    return "숫자만 입력해 주세요.";
  if (monthNumber < 1 || monthNumber > 12)
    return "유효한 달(월)을 입력해 주세요.";
  if (yearNumber < today.getFullYear() || yearNumber > today.getFullYear() + 5)
    return "유효한 년(해)을 입력해 주세요.";
  if (yearNumber === today.getFullYear() && monthNumber <= today.getMonth())
    return "만료일이 지난 카드입니다.";
  if (value.length !== CARD_INPUT_LENGTH.expiredDate)
    return "카드에 기입된 만료일을 모두 입력해 주세요.";
  return "";
};

export const validateOwnerName = (value: string) => {
  if (!REGEX.english.test(value)) return "영어만 입력해 주세요.";
  return "";
};

export const validateCvc = (value: string) => {
  if (!REGEX.number.test(value)) return "숫자만 입력해 주세요.";
  if (value.length !== CARD_INPUT_LENGTH.cvc)
    return "cvc는 카드 뒤 3자리를 입력해 주세요.";
  return "";
};

export const validatePassword = (value: string) => {
  if (!REGEX.number.test(value)) return "숫자만 입력해 주세요.";
  if (value.length !== CARD_INPUT_LENGTH.password * 2)
    return "비밀번호 앞 2자리를 입력해 주세요.";
  return "";
};

export const validateForm = (card: CardType) => {
  return (
    [
      validateCardNumber(card.cardNumber),
      validateExpiredDate(card.expiredDate),
      validateOwnerName(card.ownerName),
      validateCvc(card.cvc),
      validatePassword(card.password),
    ].join("") === ""
  );
};

export const validateCardInput = (key: keyof CardType, value: string) => {
  switch (key) {
    case "cardNumber":
      return validateCardNumber(value);
    case "expiredDate":
      return validateExpiredDate(value);
    case "ownerName":
      return validateOwnerName(value);
    case "cvc":
      return validateCvc(value);
    case "password":
      return validatePassword(value);
  }
};
