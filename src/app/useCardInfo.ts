import { useState } from "react";

export default function useCardInfo<T extends Record<string, string>>(
  initialValues: T
) {
  const [values, setValues] = useState<T>(initialValues);

  function changeValues(type: keyof T, data: string) {
    setValues((prev) => ({
      ...prev,
      [type]: data,
    }));
  }

  return {
    values,
    changeValues,
  };
}
