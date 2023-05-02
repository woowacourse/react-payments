import { useEffect, useState } from "react";
import { INPUT_STATUS } from "../type/InputStatus";

const getStateInitializer = (length: number) => () => (
  new Array(length).fill(INPUT_STATUS.NOT_COMPLETE)
);

const useMultipleInputStatus = (length: number) => {
  const [states, setStates] = useState<INPUT_STATUS[]>(getStateInitializer(length));
  const [hasError, setHasError] = useState(false);
  const [isAllComplete, setIsAllComplete] = useState(false);

  const getSetStateFunction = (index: number) => (status: INPUT_STATUS) => {
    const newStates = [ ...states ];
    
    if (newStates[index] === status) return;

    newStates[index] = status;

    setStates(newStates);
  }

  useEffect(() => {
    setHasError(states.includes(INPUT_STATUS.ERROR));
  }, [states]);

  useEffect(() => {
    setIsAllComplete(
      states.every((status) => status === INPUT_STATUS.COMPLETE)
    );
  }, [states]);

  return { hasError, isAllComplete, getSetStateFunction };
}

export default useMultipleInputStatus;
