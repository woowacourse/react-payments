import { useState, useEffect, RefObject } from "react";

const useDetectClose = <T extends HTMLElement>(
  ref: RefObject<T>,
  initialState: boolean
) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen, ref]);

  return [isOpen, setIsOpen] as const;
};

export default useDetectClose;
