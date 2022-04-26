import { useCallback, useRef } from "react";

const useControllInput = (maxlength) => {
  const itemRef = useRef([]);

  const onChange = useCallback((e) => {
    const limitInputLength = (e) => {
      e.target.value = e.target.value.substring(0, maxlength);
    };

    const autoFocus = (e) => {
      const currentIndex = itemRef.current.indexOf(e.target);
      itemRef.current[
        Math.min(currentIndex + 1, itemRef.current.length - 1)
      ].focus();
    };

    if (e.target.value.length >= maxlength) {
      limitInputLength(e);
      autoFocus(e);
    }
  }, []);

  return { itemRef, onChange };
};
export default useControllInput;
