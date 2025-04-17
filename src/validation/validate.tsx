export function isValidLength(length: number, maxLength: number) {
  return length <= maxLength;
}

export function isNumber(value: string) {
  return /^[0-9]*$/.test(value);
}

export function isValidMonth(month: number) {
  return month >= 1 && month <= 12;
}
