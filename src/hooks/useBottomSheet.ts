import { useState } from 'react';

const useBottomSheet = (init = true) => {
  const [isOpen, setIsOpen] = useState(init);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return { isOpen, toggleOpen };
};

export default useBottomSheet;
