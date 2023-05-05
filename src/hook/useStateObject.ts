import { useCallback, useState } from "react";

const useStateObject = <T extends Object>(initialObject: T) => {
  const [state, setState] = useState(initialObject);

  const setPartialState = useCallback(
    (partialState: Partial<T>) => {
      setState((prevState) => Object.assign({}, prevState, partialState));
    },
    [],
  );

  return { state, setPartialState };
};

export default useStateObject;
