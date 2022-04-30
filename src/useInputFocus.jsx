import { useEffect, useRef, useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function useInputFocus(dataStateArray, dataUnitLength) {
  const [focusInputIndex, setFocusInputIndex] = useState(null);
  const inputRef = useRef([]);

  useUpdateEffect(() => {
    if (
      focusInputIndex !== null &&
      inputRef.current[focusInputIndex].value.length === dataUnitLength
    ) {
      const index = dataStateArray.findIndex(
        (cardNumberUnit) => cardNumberUnit.length !== dataUnitLength
      );
      inputRef.current[index]?.focus();
    }
  });

  useEffect(() => {
    if (focusInputIndex !== null) inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return [inputRef, setFocusInputIndex];
}
