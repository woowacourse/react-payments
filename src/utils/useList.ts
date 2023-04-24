import { useState } from 'react';

const useList = <T>(defaultList: T[]) => {
  const [list, setList] = useState(defaultList);

  const setListIndex = (index: number) => (value: T) => {
    const newList = list.slice();
    newList[index] = value;
    setList(newList);
  };

  return [list, setListIndex] as const;
};

export default useList;
