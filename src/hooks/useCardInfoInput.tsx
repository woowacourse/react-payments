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

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    const idx = event.currentTarget.dataset["index"];
    const date = value.replace("/", "");

    if (
      contextType !== "ownerName" &&
      !ONLY_NUMBER_REGEXP.test(contextType === "expireDate" ? date : value)
    )
      return;
    if (contextType === "ownerName" && !ONLY_ENG_AND_EMPTY_REGEXP.test(value))
      return;

    try {
      if (validation) validation(value);

      setError({ isError: false, message: "" });
    } catch (error) {
      if (!(error instanceof Error)) return;
      setError({ isError: true, message: error.message });
    } finally {
      if (!dispatch) return;

      if (contextType === "expireDate") {
        const [MM, YY] = value.split("/");

        const dateValitation = MMYYValidation(date, [MM, YY]);

        if (dateValitation && value.length === NUMBERS.MAX_EXPIREDATE) {
          dispatch({ type: contextType, payload: "", index: Number(idx) });
          setError({
            isError: true,
            message: `${value}는 유효한 값이 아닙니다.`,
          });
          return;
        }
      }
      dispatch({ type: contextType, payload: value, index: Number(idx) });
    }

    if (idx && nextInputFocus) {
      nextInputFocus(Number(idx));
    }
  };

  /**
   * 문제 1 onChange가 너무 복잡하다.
   * 문제 2 상태 값을 하나의 객체에서 사용하다 관심사 분리가 되어있지 않다.
   *  -> 모든 컴포넌트의 상태를 하나의 객체에서 관리할 필요가 없다고 생각한다. 분리된 상태를 적용해보자
   *
   */

  return {
    value: cardInfo[contextType] as T,
    onChange,
    error,
  };
}

export default useCardInfoInput;
