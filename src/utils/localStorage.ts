export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  const item = localStorage.getItem(key);

  return item ? (JSON.parse(item) as T) : initialValue;
};

export const setLocalStorage = <T extends Object>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
