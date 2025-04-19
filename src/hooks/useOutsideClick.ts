import { type RefObject, useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(
  callback: () => void
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleDocumentClick = ({ target }: MouseEvent | TouchEvent) => {
      const container = ref.current;
      if (!container || container.contains(target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
