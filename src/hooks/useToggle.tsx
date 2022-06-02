import { useReducer } from 'react';

const useToggle = (initialState: boolean) => {
  const [isToggle, handleToggle] = useReducer((prev) => !prev, initialState);

  return { isToggle, handleToggle };
};

export default useToggle;
