import { useEffect, useState } from "react";
import { UseInputProps } from "./useInput";
import { useCardState } from "../context/CardContext";

export function useFormValidation(
  ref: React.RefObject<HTMLFormElement>,
  fields: UseInputProps["value"][]
) {
  const [isFormNotFilled, setIsFormFilled] = useState(true);
  const { title } = useCardState();
  const isTitleEmpty = title === "";

  useEffect(() => {
    if (!ref.current) return;
    setIsFormFilled(!ref.current.checkValidity() || isTitleEmpty);
  }, [ref, fields]);

  return {
    isFormNotFilled,
  };
}
