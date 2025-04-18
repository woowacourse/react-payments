export function isValidLength(length: number, maxLength: number) {
  return length <= maxLength;
}

export function isValidMonth(month: number) {
  return 1 <= month && month <= 12;
}
