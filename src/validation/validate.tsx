export function isValidLength(length: number, maxLength: number) {
  return length <= maxLength;
}

export function isNumber(value: string) {
  return /^[0-9]*$/.test(value);
}

export function isValidMonth(month: number) {
  return 1 <= month && month <= 12;
}
