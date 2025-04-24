import { isEmpty } from "./common";

export const isErrorCardCompany = (value: string) => {
  if (isEmpty(value)) return "카드사를 하나 선택해주세요";
  return null;
};
