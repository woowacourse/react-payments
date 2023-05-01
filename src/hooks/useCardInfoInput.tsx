import { useContext, useState } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { CardInfoProps } from "src/interfaces";
import { isUnValidInputValue } from "src/utils/validation";

interface Props {
  contextType: keyof CardInfoProps;
  validation?: (value: string) => void;
  nextInputFocus?: (index?: number) => void;
}

function useCardInfoInput<T>({
  contextType,
  validation,
  nextInputFocus,
}: Props) {
  const [cardInfo, dispatch] = useContext(CardInfoContext);

  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    const idx = event.currentTarget.dataset["index"];
    if (!dispatch) return;

    if (isUnValidInputValue(contextType, value)) return;

    try {
      if (validation) validation(value);
      setError({ isError: false, message: "" });
    } catch (error) {
      if (!(error instanceof Error)) return;

      setError({ isError: true, message: error.message });
    } finally {
      dispatch({ type: contextType, payload: value, index: Number(idx) });
    }

    if (idx && nextInputFocus) {
      nextInputFocus(Number(idx));
    }
  };

  return {
    value: cardInfo[contextType] as T,
    onChange,
    error,
  };
}

export default useCardInfoInput;
