import { CardInfoContext } from "context/CardInfoContextProvider";
import { useCallback, useContext, useState } from "react";

const useCardInput = (infoKey) => {
  const [isInvalid, setInvalid] = useState(false);
  const { state, setState } = useContext(CardInfoContext);

  const targetState = state[infoKey];

  const setTargetState = (newTargetState) => {
    setState({ payload: { [infoKey]: newTargetState } });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return { targetState, setTargetState, isInvalid, setInvalid, triggerInvalid };
};

export default useCardInput;
