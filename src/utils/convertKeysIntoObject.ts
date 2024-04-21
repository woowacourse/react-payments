const convertKeysIntoObject = <T>(keys: string[], defaultValue: T): Record<string, T> => {
  return keys.reduce(
    (resultObj, key) => {
      resultObj[key] = defaultValue;
      return resultObj;
    },
    {} as Record<string, T>,
  );
};

export default convertKeysIntoObject;
