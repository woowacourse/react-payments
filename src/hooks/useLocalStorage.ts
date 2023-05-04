import { useState } from 'react';

const useLocalStorage = (key: string, initValue: string) => {
  const fetchData = JSON.parse(localStorage.getItem(key) ?? initValue);
  const [value, setValue] = useState(fetchData);

  const postLocalStorage = (data: string) => {
    setValue(JSON.parse(data));
    localStorage.setItem(key, data);
  };

  return { value, postLocalStorage };
};

export default useLocalStorage;
