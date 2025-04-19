const isValidNumberRange = ({
  value,
  min,
  max,
}: {
  value: number;
  min: number;
  max: number;
}): boolean => {
  if (value < min) return false;
  if (value > max) return false;

  return true;
};

export default isValidNumberRange;
