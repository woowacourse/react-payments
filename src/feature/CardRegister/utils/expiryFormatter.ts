export type ExpiryType = "month" | "year";

export const formatExpiryValue = (value: string, expiryType: ExpiryType) => {
  if (expiryType === "month" && value.length === 1 && value !== "0") {
    return `0${value}`;
  }

  if (expiryType === "year" && value.length === 1) {
    return `0${value}`;
  }

  return value;
};
