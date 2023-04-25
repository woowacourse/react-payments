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
