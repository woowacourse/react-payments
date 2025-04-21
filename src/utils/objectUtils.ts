export const areAllValuesNotNull = <T extends Record<string, any>>(obj: T): boolean => {
  return Object.values(obj).every(value => value !== null);
};

export const areAllValuesFalse = <T extends Record<string, boolean>>(obj: T): boolean => {
  return Object.values(obj).every(value => !value);
};
