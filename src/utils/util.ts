export const convertArrayIntoObject = <T>(keys: string[], initialValue: T) => {
  const obj: Record<string, T> = {};

  keys.forEach(key => {
    obj[key] = initialValue;
  });

  return obj;
};
