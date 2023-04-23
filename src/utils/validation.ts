import { CONTINUOUS_EMPTY_REGEXP, MMYY_REGEXP } from "./regexp";

export const lengthMatchValidation = (value: string, maxLength: number) => {
  if (value.length > 0 && value.length !== maxLength) {
    throw new Error(`${maxLength}글자를 입력해주세요`);
  }
};

export const MMYYValidation = (date: string, [MM, YY]: [string, string]) => {
  const [curMM, _, curYY] = new Date().toLocaleDateString("en-US").split("/");
  const years = curYY.slice(2);

  const isMMYYVal =
    date.length > 0 &&
    (!MMYY_REGEXP.test(date) || years > YY || (years === YY && curMM > MM));

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
