import { useEffect, useState } from "react";
import { UseInputProps } from "./useInput";
import { useCardState } from "../context/CardContext";

export function useFormValidation(
  ref: React.RefObject<HTMLFormElement>,
  fields: UseInputProps["value"][]
) {
  const [isFormFilled, setIsFormFilled] = useState(true);
  const { title } = useCardState();
  useEffect(() => {
    if (!ref.current) return;
    setIsFormFilled(!ref.current.checkValidity() || title === "");
  }, [ref, fields]);
  return {
    isFormFilled,
  };
}
