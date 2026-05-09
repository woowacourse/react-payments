export function validateNumberString(input: string) {
  return /^\d*$/.test(input);
}

export function validateStringMaxLength(input: string, maxLength: number) {
  return input.trim().length <= maxLength;
}

export function validateStringLength(input: string, length: number) {
  return input.trim().length === length;
}

export function validateMonth(input: string) {
  const monthArray = Array.from({ length: 12 }).map((_, index) =>
    String(index + 1).padStart(2, "0"),
  );
  return monthArray.includes(input);
}

export function validateYear(input: string) {
  const monthArray = Array.from({ length: 100 }).map((_, index) =>
    String(index).padStart(2, "0"),
  );
  return monthArray.includes(input);
}
