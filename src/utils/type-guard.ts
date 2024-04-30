export const isArrayElement = <T extends string>(
  options: readonly T[],
  target: string
): target is T => {
  return options.includes(target as T);
};
