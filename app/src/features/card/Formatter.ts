export const maskCardNumber = (value: string) => {
  const chars = value.split("");
  const maskingEndPos = 12;
  for (let maskingPos = 6; maskingPos < maskingEndPos; maskingPos++) {
    chars[maskingPos] = "*";
  }
  return chars.join("");
};

export const splitCardNumber = (value: string, networkBrand: string) => {
  if (networkBrand === "amex") {
    return [value.slice(0, 4), value.slice(4, 10), value.slice(10, 15)].join(
      " ",
    );
  }
  if (networkBrand === "diners") {
    return [value.slice(0, 4), value.slice(4, 10), value.slice(10, 14)].join(
      " ",
    );
  }
  return [
    value.slice(0, 4),
    value.slice(4, 8),
    value.slice(8, 12),
    value.slice(12, 16),
  ].join(" ");
};
