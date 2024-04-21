const convertKeysIntoObject = <T>(keys: string[], defaultValue: T) => {
  const obj: Record<string, T> = {};

  keys.forEach(key => {
    obj[key] = defaultValue;
  });

  return obj;
};

export default convertKeysIntoObject;
