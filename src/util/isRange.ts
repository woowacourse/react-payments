export const isRange = (value: number, min: number, max: number) => {
  return value < min || value > max;
};
