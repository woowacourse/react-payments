import isExactLength from "./isExactLength";

export function hasInvalidCardNumberSegment(
  numbers: string[],
  maxLength: number
): boolean {
  return numbers.some((number) => {
    if (isExactLength(number, 0) || isExactLength(number, maxLength))
      return false;
    return true;
  });
}
