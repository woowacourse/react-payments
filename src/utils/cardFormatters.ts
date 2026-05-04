export const maskCardNumber = (array: string[]) => {
  return array.map((value, index) =>
    index < array.length / 2 ? value : "*".repeat(value.length),
  );
};

export const formatExpireDate = (array: string[]) => {
  return array.map((value, index) =>
    value && index === 0 ? `${value}/` : value,
  );
};
