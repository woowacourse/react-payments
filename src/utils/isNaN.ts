export const isNaN = (value: unknown): boolean => {
  return typeof value === "number" && Number.isNaN(value);
};
