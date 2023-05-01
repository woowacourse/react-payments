type KeyOfObj<T> = Extract<keyof T, string>;

const isKeyOfObj = <T extends Record<string, any>>(
  obj: T,
  key: string
): key is KeyOfObj<T> => {
  return key in obj;
};

export { isKeyOfObj };
