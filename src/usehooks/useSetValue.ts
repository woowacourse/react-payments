export const useSetValue = (value: any, setValue: any) => {
  const changeValue = (key: string, changedValue: string) => {
    value[key] = changedValue;
    setValue(value);
  };

  return [value, changeValue];
};
