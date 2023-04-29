const INVALID_BLANK = "  ";

interface Condition {
  length: number;
  regex: RegExp;
}

export const changeInvalidValueToBlank = (
  value: string,
  { length, regex }: Condition
) => {
  return value.replace(regex, "").slice(0, length);
};

export const preventInvalidBlank = (value: string) => {
  const validValue = value.trimStart();
  if (validValue.includes(INVALID_BLANK)) return;

  return validValue;
};
