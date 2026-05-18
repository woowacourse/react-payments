import { useCallback, useRef } from "react";

const useFocus = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const registerInputRef = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputRefs.current[index] = el;
    },
    [],
  );

  const setFocus = useCallback((index: number) => {
    if (index < inputRefs.current.length) {
      inputRefs.current[index]?.focus();
    }
  }, []);

  const setNextFocus = useCallback(() => {
    const currentIndex = inputRefs.current.findIndex(
      (el) => el === document.activeElement,
    );
    if (currentIndex !== -1 && currentIndex + 1 < inputRefs.current.length) {
      inputRefs.current[currentIndex + 1]?.focus();
    }
  }, []);

  const setPreviousFocus = useCallback(() => {
    const currentIndex = inputRefs.current.findIndex(
      (el) => el === document.activeElement,
    );
    if (currentIndex > 0) {
      inputRefs.current[currentIndex - 1]?.focus();
    }
  }, []);

  return {
    getCurrentFocusRef: () => {
      const currentIndex = inputRefs.current.findIndex(
        (el) => el === document.activeElement,
      );
      return inputRefs.current[currentIndex] || null;
    },
    registerInputRef,
    setFocus,
    setNextFocus,
    setPreviousFocus,
  };
};

export default useFocus;
