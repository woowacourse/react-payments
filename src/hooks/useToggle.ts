import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [isToggle, setIsToggle] = useState(initialValue);

  const handleToggle = () => setIsToggle(!isToggle);

  return {
    isToggle,
    handleToggle,
  };
};

export default useToggle;
