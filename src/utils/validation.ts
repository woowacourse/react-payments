import {
  CONTINUOUS_EMPTY_REGEXP,
  MMYY_REGEXP,
  ONLY_ENG_AND_EMPTY_REGEXP,
  ONLY_NUMBER_REGEXP,
} from "./regexp";
import { NUMBERS } from "./constant";
import { objectValueToString } from ".";
import { CardInfoProps } from "src/interfaces";

export const isUnValidInputValue = (
  contextType: keyof CardInfoProps,
  value: string,
) => {
  if (contextType === "nickName") return false;

  if (contextType !== "ownerName" && !ONLY_NUMBER_REGEXP.test(value))
    return true;
  if (contextType === "ownerName" && !ONLY_ENG_AND_EMPTY_REGEXP.test(value))
    return true;

  return false;
};

export const lengthMatchValidation = (value: string, maxLength: number) => {
  if (value.length > 0 && value.length !== maxLength) {
    throw new Error(`${maxLength}글자를 입력해주세요`);
  }
};

export const expireDateValidation = (value: string) => {
  const dateValitation = MMYYValidation(value);

  if (dateValitation) {
    throw new Error("유효한 만료일이 아닙니다. ex) 50년 2월 02/50");
  }
};

export const MMYYValidation = (date: string) => {
  const [curMM, _, curYY] = new Date().toLocaleDateString("en-US").split("/");
  const MM = date.slice(0, 2);
  const YY = date.slice(2);

  const years = curYY.slice(2);
  const isMMYYVal =
    date.length > 0 &&
    (!MMYY_REGEXP.test(date) ||
      years > YY ||
      (years === YY && Number(curMM) > Number(MM)));

  return isMMYYVal;
};

export const continuousEmptyValidation = (value: string) => {
  if (CONTINUOUS_EMPTY_REGEXP.test(value)) {
    throw new Error("카드 소유자 이름은 공백을 연속해서 작성할 수 없습니다.");
  }
};

export const checkOwnerNameLength = (
  value: string,
  min: number,
  max: number,
) => {
  if (value.length < min || value.length > max) {
    throw new Error(
      `카드 소유자 이름은 ${min}글자 이상 ${max}글자 이하입니다.`,
    );
  }
};

export const isValidateFormValues = (cardInfo: CardInfoProps) => {
  const {
    MAX_CARD,
    MAX_EXPIREDATE,
    MAX_SECURITY,
    MAX_PASSWORD,
    MIN_OWNER_NAME,
    MAX_OWNER_NAME,
  } = NUMBERS;

  const { cardNumbers, expireDate, securityCode, password, ownerName } =
    cardInfo;

  const exceptOwnerName =
    objectValueToString(cardNumbers).length === MAX_CARD &&
    objectValueToString(expireDate).length === MAX_EXPIREDATE &&
    MMYY_REGEXP.test(objectValueToString(expireDate)) &&
    securityCode.length === MAX_SECURITY &&
    objectValueToString(password).length === MAX_PASSWORD;

  const nameLength = ownerName.length;

  const isCardComplete =
    (nameLength === 0 ||
      (nameLength <= MAX_OWNER_NAME && nameLength >= MIN_OWNER_NAME)) &&
    exceptOwnerName;

  return isCardComplete;
};
