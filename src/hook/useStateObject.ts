import { useState } from "react";

const useStateObject = <T extends Object>(initialObject: T) => {
  const [state, setState] = useState(initialObject);

  const setPartialState = (partialState: Partial<T>) => {
    setState(Object.assign({ ...state }, partialState));
  };

  return { state, setPartialState };
};

export default useStateObject;
