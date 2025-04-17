export function replaceAt<T>(
  array: T[],
  newValue: T,
  index: number,
  setState: (newArray: T[]) => void
) {
  const newArray = [...array];
  newArray[index] = newValue;
  setState(newArray);
}
