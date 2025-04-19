const isValidStringLength = ({
  value,
  minLength = 0,
  maxLength,
}: {
  value: string;
  minLength?: number;
  maxLength: number;
}): boolean => {
  if (value.length > maxLength) return false;
  if (value.length < minLength) return false;

  return true;
};

export default isValidStringLength;
