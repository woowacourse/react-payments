import { useContext, useState } from "react";
import { CardInfoContext } from "src/context/CardInfoContext";
import { CardInfoProps } from "src/interfaces";
import { NUMBERS } from "src/utils/constant";
import {
  ONLY_ENG_AND_EMPTY_REGEXP,
  ONLY_NUMBER_REGEXP,
} from "src/utils/regexp";
import { MMYYValidation } from "src/utils/validation";

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

  const numberInputOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const { value } = event.currentTarget;
    const idx = event.currentTarget.dataset["index"];
    if (!dispatch) return;

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

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

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    const idx = event.currentTarget.dataset["index"];
    if (!dispatch) return;
    checkInputValue(value);

    try {
      if (validation) validation(value);
      setError({ isError: false, message: "" });
    } catch (error) {
      if (!(error instanceof Error)) return;

      setError({ isError: true, message: error.message });
    } finally {
      if (contextType === "expireDate" && isInValidExpireDate(value)) {
        dispatch({ type: contextType, payload: "" });
        setError({
          isError: true,
          message: `${value}는 유효한 값이 아닙니다.`,
        });
        return;
      }

      dispatch({ type: contextType, payload: value, index: Number(idx) });
    }

    if (idx && nextInputFocus) {
      nextInputFocus(Number(idx));
    }
  };

  const isInValidExpireDate = (value: string) => {
    if (!dispatch) return;

    const [MM, YY] = value.split("/");
    const date = value.replace("/", "");
    const dateValitation = MMYYValidation(date, [MM, YY]);

    if (dateValitation && value.length === NUMBERS.MAX_EXPIREDATE) {
      return true;
    }

    return false;
  };

  const checkInputValue = (value: string) => {
    const date = value.replace("/", "");

    if (
      contextType !== "ownerName" &&
      !ONLY_NUMBER_REGEXP.test(contextType === "expireDate" ? date : value)
    )
      return; // ownerName이 아니고 date가 아닐때
    if (contextType === "ownerName" && !ONLY_ENG_AND_EMPTY_REGEXP.test(value))
      // owner Name일 때
      return;
  };

  return {
    value: cardInfo[contextType] as T,
    numberInputOnChange,
    onChange,
    error,
  };
}

export default useCardInfoInput;
