import { useState } from "react";

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};

export default useIsOpen;
