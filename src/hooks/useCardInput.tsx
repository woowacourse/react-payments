import { useCallback, useContext, useState } from "react";

import {
  CardInfoContext,
  CardInfoStateTypeInterface,
} from "context/CardInfoContextProvider";

function useCardInput<T extends keyof CardInfoStateTypeInterface>(infoKey: T) {
  const [isInvalid, setInvalid] = useState(false);
  const { state, setState } = useContext(CardInfoContext);

  const targetState = state[infoKey];

  const setTargetState = (newTargetState: typeof targetState) => {
    setState({ payload: { [infoKey]: newTargetState } });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return { targetState, setTargetState, isInvalid, setInvalid, triggerInvalid };
}

export default useCardInput;
