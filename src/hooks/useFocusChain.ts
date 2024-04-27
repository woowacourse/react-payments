import React from "react";

const useFocusChain = (refs: React.RefObject<HTMLInputElement>[]) => {
  const setFocusNext = () => {
    const currentFocusedIndex = refs.findIndex(
      (ref) => ref.current && ref.current === document.activeElement
    );

    const nextIndex = currentFocusedIndex + 1;
    const nextRef = refs[nextIndex];

    if (nextIndex < refs.length && nextRef.current) {
      nextRef.current.focus();
    }
  };

  return {
    setFocusNext,
  };
};

export default useFocusChain;
