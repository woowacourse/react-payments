export function hasInvalidSegment(
  numbers: string[],
  maxLength: number
): boolean {
  return numbers.some(
    (number) => number.length !== 0 && number.length !== maxLength
  );
}
