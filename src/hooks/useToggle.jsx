import { useCallback, useState } from 'react';

const useToggle = (intialState) => {
  const [isToggle, setIsToggle] = useState(intialState);

  const handleToggle = useCallback(() => {
    setIsToggle((prevToggle) => !prevToggle);
  }, []);

  return [isToggle, handleToggle];
};

export default useToggle;
