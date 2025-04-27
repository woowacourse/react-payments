import { useRef, useEffect } from "react";

const useInputFocus = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return inputRefs;
};

export default useInputFocus;
