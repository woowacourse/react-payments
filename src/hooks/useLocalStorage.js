/* eslint-disable no-console */
import { useState, useMemo } from 'react';

export default (key, defaultValue = '') => {
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item || JSON.stringify(defaultValue);
    } catch (error) {
      return defaultValue;
    }
  });

  const parsedValue = useMemo(() => {
    try {
      return JSON.parse(currentValue);
    } catch (error) {
      return currentValue;
    }
  }, [currentValue]);

  const setValue = (value) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      window.localStorage.setItem(key, stringifiedValue);

      setCurrentValue(stringifiedValue);
    } catch (error) {
      console.error(error);
    }
  };

  return { value: parsedValue, setValue };
};
