import { useEffect, useState } from "react";
import { INPUT_STATUS } from "../type/InputStatus";

const useMultipleInputStatus = (length: number) => {
  const initialState = Object.assign(new Array(length).fill(INPUT_STATUS.NOT_COMPLETE));

  const [states, setStates] = useState(initialState);
  const [hasError, setHasError] = useState(false);
  const [isAllComplete, setIsAllComplete] = useState(false);

  const getSetStateFunction = (index: number) => (status: INPUT_STATUS) => {
    const newStates = { ...states };
    newStates[index] = status;

    setStates(newStates);
  }

  useEffect(() => {
    setHasError(Object.values(states).includes(INPUT_STATUS.ERROR));
  }, [states]);

  useEffect(() => {
    setIsAllComplete(
      Object.values(states).every((status) => status === INPUT_STATUS.COMPLETE)
    );
  }, [states]);

  return { hasError, isAllComplete, getSetStateFunction };
}

export default useMultipleInputStatus;
