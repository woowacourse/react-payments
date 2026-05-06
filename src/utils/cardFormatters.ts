import type { ExpireDate } from "../types/types";

export const maskCardNumber = (array: string[]) => {
  return array.map((value, index) =>
    index < array.length / 2 ? value : "*".repeat(value.length),
  );
};

export const formatExpireDate = (expireDate: ExpireDate) => {
  if (expireDate.month && expireDate.year) {
    return [`${expireDate.month}/`, expireDate.year];
  }
  return [expireDate.month, expireDate.year];
};
