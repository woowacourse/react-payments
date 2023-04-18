interface Condition {
  length: number;
  regex: RegExp;
}

export const changeToValidValue = (
  value: string,
  { length, regex }: Condition
) => {
  return value.replace(regex, "").slice(0, length);
};
