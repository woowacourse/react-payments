import type { ErrorEntry } from './types';

export function validateNumberString(input: string) {
  return /^\d+$/.test(input);
}

export function validateStringMaxLength(input: string, maxLength: number,) {
  return input.length <= maxLength
}

export function validateStringLength(input: string, length: number,) {
  return input.length === length
}

export function validateMonth(input: string) {
  const monthArray = Array.from({ length: 12 }).map((_, index) => String(index + 1).padStart(2, "0"));
  return monthArray.includes(input);
}

export function validateYear(input: string) {
  const monthArray = Array.from({ length: 100 }).map((_, index) => String(index).padStart(2, "0"));
  return monthArray.includes(input);
}

export function validateCVC(input: string) {
  const monthArray = Array.from({ length: 1000 }).map((_, index) => String(index).padStart(3, "0"));
  return monthArray.includes(input);
}

export function getLastError(errors: ErrorEntry[]): Error | null {
  return errors
    .filter((entry) => entry !== null)
    .reduce<ErrorEntry>(
      (latest, current) => (latest === null || current.timestamp > latest.timestamp ? current : latest),
      null,
    )?.error ?? null;
}