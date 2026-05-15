import type { ExpireDate } from "../types/types";
import type { ExpireDateError } from "../types/types";

export const maskCardNumber = (array: string[]) => {
  return array.map((value, index) =>
    index < array.length / 2 ? value : "*".repeat(value.length),
  );
};

export const formatExpireDate = (
  expireDate: ExpireDate,
  expireDateError: ExpireDateError,
) => {
  if (
    expireDate.month &&
    expireDate.year &&
    !expireDateError.month &&
    !expireDateError.year
  ) {
    return [`${expireDate.month}/`, expireDate.year];
  }
  return ["", ""];
};
