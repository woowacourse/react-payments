import { useState } from "react";
import type { SetExpireDate } from "../types/types";
import { isNumeric } from "../utils/validators";

export function useExpireDateInput(setExpireDate: SetExpireDate) {
  const [expireDateError, setExpireDateError] = useState([""]);
  const handleExpireDateChange = (
    index: number,
    value: string,
    name: string,
  ) => {
    const newError = [...expireDateError];

    if (!isNumeric(value)) {
      newError[index] = "숫자를 입력해주세요.";
      setExpireDateError(newError);
      return;
    }

    newError[index] = "";

    if (name === "month" && value !== "") {
      const month = Number(value);
      if (month < 1 || month > 12) {
        newError[index] = "1 ~ 12월 사이의 숫자를 입력해주세요.";
      }
    }

    setExpireDateError(newError);

    setExpireDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { expireDateError, handleExpireDateChange };
}
