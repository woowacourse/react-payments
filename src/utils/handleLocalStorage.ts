export const setLocalStorage = (key: string, data: Array<object>) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);

  if (localStorageData) return JSON.parse(localStorageData);
  return null;
};
