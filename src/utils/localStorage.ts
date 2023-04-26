function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) as string);
}

function saveToLocalStorage<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalStorage, saveToLocalStorage };
