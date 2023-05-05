import { useRef } from "react";
import { useFormValidation } from "./useFormValidation";
import { useInput } from "./useInput";

export function useCardForm() {
  const firstCardNumber = useInput("", { name: "firstCardNumber" });
  const secondCardNumber = useInput("", { name: "secondCardNumber" });
  const thirdCardNumber = useInput("", { name: "thirdCardNumber" });
  const fourthCardNumber = useInput("", { name: "fourthCardNumber" });
  const year = useInput("", { name: "year" });
  const month = useInput("", { name: "month" });
  const owner = useInput("", { name: "owner" });
  const cvc = useInput("", { name: "cvc" });
  const firstPassword = useInput("", { name: "firstPassword" });
  const secondPassword = useInput("", { name: "secondPassword" });

  const formRef = useRef<HTMLFormElement>(null);
  const { isFormNotFilled } = useFormValidation(formRef, [
    firstCardNumber.value,
    secondCardNumber.value,
    thirdCardNumber.value,
    fourthCardNumber.value,
    year.value,
    month.value,
    cvc.value,
    firstPassword.value,
    secondPassword.value,
  ]);

  return {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    year,
    month,
    owner,
    cvc,
    firstPassword,
    secondPassword,
    formRef,
    isFormNotFilled,
  };
}
