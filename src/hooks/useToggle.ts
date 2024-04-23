import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleToggle,
  };
};

export default useToggle;
