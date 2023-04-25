import { useCallback, useEffect } from 'react';

const useLocalStorage = <DataType extends object>(key: string, initData?: DataType) => {
  const getLocalStorage = useCallback((): DataType | null => {
    const pureLocalItem = localStorage.getItem(key);
    return pureLocalItem ? JSON.parse(pureLocalItem) : null;
  }, [key]);

  const setLocalStorage = useCallback(
    (data: DataType) => {
      localStorage.setItem(key, JSON.stringify(data));
    },
    [key],
  );

  const pushLocalStorage = (data: any) => {
    const arrayList = getLocalStorage() || ([] as DataType);
    if (Array.isArray(arrayList)) {
      arrayList.push(data);
      setLocalStorage(arrayList);
    }
  };

  useEffect(() => {
    if (initData) {
      setLocalStorage(initData);
    }
  }, [initData, getLocalStorage, setLocalStorage]);

  return { getLocalStorage: getLocalStorage(), setLocalStorage, pushLocalStorage };
};

export default useLocalStorage;
