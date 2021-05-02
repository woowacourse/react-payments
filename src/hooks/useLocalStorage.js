/* eslint-disable no-console */
import { useState } from 'react';

export default (key, defaultValue = '') => {
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item || JSON.stringify(defaultValue);
    } catch (error) {
      return defaultValue;
    }
  });

  const parsedValue = (() => {
    try {
      return JSON.parse(currentValue);
    } catch (error) {
      return currentValue;
    }
  })();

  const setValue = (value) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      window.localStorage.setItem(key, stringifiedValue);

      setCurrentValue(stringifiedValue);
    } catch (error) {
      console.error(error);
    }
  };

  const addEntity = (value) => {
    setValue([...parsedValue, value]);
  };

  const updateEntity = (value) => {
    const newValueList = parsedValue.filter((_value) => _value.id !== value.id).reverse();
    setValue([...newValueList, value]);
  };

  const deleteEntity = (id) => {
    const newValueList = parsedValue.filter((_value) => _value.id !== id).reverse();
    setValue(newValueList);
  };

  return { value: parsedValue, setValue, addEntity, updateEntity, deleteEntity };
};
