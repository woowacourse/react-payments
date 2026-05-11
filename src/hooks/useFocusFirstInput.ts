import { useEffect } from "react";

export function useFocusFirstInput(
  formRef: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (formRef.current) {
      const firstInput = formRef.current.querySelector("input");

      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [formRef]);
}
