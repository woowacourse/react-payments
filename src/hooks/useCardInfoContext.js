import { useContext } from "react";
import {
  CardInfoCompleteDispatchContext,
  CardInfoCompleteStateContext,
} from "../providers/CardInfoCompleteProvider";
import {
  CardInfoDispatchContext,
  CardInfoStateContext,
} from "../providers/CardInfoProvider";

function useCardInfoContext() {
  const cardInfo = useContext(CardInfoStateContext);
  const infoDispatch = useContext(CardInfoDispatchContext);
  const completeInfo = useContext(CardInfoCompleteStateContext);
  const completeDispatch = useContext(CardInfoCompleteDispatchContext);

  return { cardInfo, infoDispatch, completeInfo, completeDispatch };
}

export default useCardInfoContext;
