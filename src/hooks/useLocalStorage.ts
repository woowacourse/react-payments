import { LOCAL_STORAGE_KEY } from '../constants';
import { getLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const useLocalStorage = <T>(initialData: T[], key: string = LOCAL_STORAGE_KEY) => {
  const data: T[] = getLocalStorage(key) ?? initialData;

  const setData = (data: T[]) => {
    saveToLocalStorage(key, data);
  };

  const setDataBeforeUnload = (data: T[]) => {
    window.addEventListener('beforeunload', () => {
      setData(data);
    });
  };

  return { data, setData, setDataBeforeUnload };
};
export { useLocalStorage };
