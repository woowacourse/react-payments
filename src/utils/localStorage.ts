import { LOCAL_STORAGE_KEY } from "../constants";

function getLocalStorage(key: string = LOCAL_STORAGE_KEY) {
  return JSON.parse(localStorage.getItem(key) as string);
}

function saveToLocalStorage<T>(data: T[], key: string = LOCAL_STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalStorage, saveToLocalStorage };
