export const getItemFromLocalStorage = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

export const setItemInLocalStorage = <T>(key: string, data: T) => {
  const JSONData = JSON.stringify(data);
  localStorage.setItem(key, JSONData);
};
