export function createObjectWithKeys<T>(
  keys: string[],
  initialValue: T
): Record<string, T> {
  return keys.reduce<Record<string, T>>((acc, key) => {
    acc[key] = initialValue;
    return acc;
  }, {});
}
