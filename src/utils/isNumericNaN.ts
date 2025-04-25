export const isNumericNaN = (value: unknown): boolean => {
  return typeof value === "number" && Number.isNaN(value);
};
