export const createInitialValues = <T extends string, U>(
  obj: Record<T, unknown>,
  initialValue: U
): Record<T, U> => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key as T] = initialValue;
      return acc;
    },
    {} as Record<T, U>
  );
};
