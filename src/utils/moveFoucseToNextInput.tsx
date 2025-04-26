export function moveFocusToNextInput(
  refs: React.RefObject<HTMLInputElement[]>,
  length: number,
  index: number
) {
  if (index < length - 1) {
    refs.current?.[index + 1]?.focus();
  }
}
