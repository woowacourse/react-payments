import { useState } from "react";
import { isNumeric } from "../utils/validators";

export function useExpireDateInput() {
  const [expireDate, setExpireDate] = useState({ month: "", year: "" });
  const [expireDateError, setExpireDateError] = useState({
    month: "",
    year: "",
  });

  const handleMonthChange = (value: string) => {
    if (!isNumeric(value)) {
      setExpireDateError((prev) => ({
        ...prev,
        month: "숫자를 입력해주세요.",
      }));
      return;
    }

    if (value !== "") {
      const month = Number(value);

      if (month < 1 || month > 12) {
        setExpireDateError((prev) => ({
          ...prev,
          month: "1 ~ 12월 사이의 숫자를 입력해주세요.",
        }));
        return;
      }
    }

    setExpireDateError((prev) => ({
      ...prev,
      month: "",
    }));

    setExpireDate((prev) => ({
      ...prev,
      month: value,
    }));
  };

  const handleYearChange = (value: string) => {
    if (!isNumeric(value)) {
      setExpireDateError((prev) => ({
        ...prev,
        year: "숫자를 입력해주세요.",
      }));
      return;
    }

    setExpireDateError((prev) => ({
      ...prev,
      year: "",
    }));

    setExpireDate((prev) => ({
      ...prev,
      year: value,
    }));
  };

  return { expireDate, expireDateError, handleMonthChange, handleYearChange };
}
