import { useContext } from "react";

import FormWrapperContext from "./FormWrapperContext";
import type { FormWrapperValue } from "./types";

//TODO: 타입 추론이 되도록 개선하기
export const useFormValue = <T extends Record<string, unknown>>() => {
  const context = useContext(FormWrapperContext);
  if (!context) {
    throw new Error(
      "useFormValue는 FormWrapper 내부에서만 사용할 수 있습니다.",
    );
  }
  return context as FormWrapperValue<T>;
};

export default useFormValue;
