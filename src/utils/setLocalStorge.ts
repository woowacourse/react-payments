export const setLocalStorage = (key: string, data: Array<object>) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLoacalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);

  if (localStorageData) return JSON.parse(localStorageData);
  return null;
};
