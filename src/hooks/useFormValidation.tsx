import { useEffect, useState } from "react";
import { UseInputProps } from "./useInput";

export function useFormValidation(
  ref: React.RefObject<HTMLFormElement>,
  fields: UseInputProps["value"][]
) {
  const [isFormFilled, setIsFormFilled] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    setIsFormFilled(!ref.current.checkValidity());
  }, [ref, fields]);

  return {
    isFormFilled,
  };
}
