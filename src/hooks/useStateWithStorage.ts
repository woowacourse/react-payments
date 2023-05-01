import { useEffect, useState } from "react";

import store from "../utils/storage";

const useStateWithStorage = <T>(key: string, initialValue: T) => {
  const value = store.getStorage<T>(key) ?? initialValue;
  const [storageValue, setStorageValue] = useState<T>(value);

  useEffect(() => {
    store.setStorage(key, storageValue);
  }, [storageValue, key]);

  return { storageValue, setStorageValue };
};

export default useStateWithStorage;
