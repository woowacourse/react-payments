import { useCardDispatch, useCardState } from "../../contexts/CardContext";

function useCardIsValid() {
  const dispatch = useCardDispatch();

  const { isValid } = useCardState();
  const setIsValid = (value: boolean) =>
    dispatch({ type: "SET_IS_VALID", isValid: value });

  return { isValid, setIsValid };
}

export default useCardIsValid;
