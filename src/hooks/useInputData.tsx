import { useRef } from 'react';

export const useInputData = (): [React.MutableRefObject<string>, (newData: string) => void] => {
  const inputRef = useRef<string>('');

  const setInputRef = (newData: string) => {
    inputRef.current = newData;
  };

  return [inputRef, setInputRef];
};
