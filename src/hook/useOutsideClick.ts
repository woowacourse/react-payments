import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      )
        callback();
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.addEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
};

export default useOutsideClick;
