import { useCallback, useState } from "react";

const useArrayState = <T>(initialArray: T[]) => {
  const [array, setArray] = useState(initialArray);

  const push = useCallback((newValue: T) => {
    setArray((prevArray) => [...prevArray, newValue]);
  }, []);

  return { array, push };
};

export default useArrayState;
