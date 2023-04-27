import { useContext } from "react";
import { CardContext, CardDispatchContext } from "../contexts/CardContext";

function useCardState() {
  const state = useContext(CardContext);

  if (!state) throw new Error("Can't find CardContext");

  return state;
}

function useCardDispatch() {
  const dispatch = useContext(CardDispatchContext);

  if (!dispatch) throw new Error("Can't find CardContext");

  return dispatch;
}

export { useCardState, useCardDispatch };
