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

    const firstDigit = value.substring(0, 1);

    if (value !== "") {
      if (firstDigit === "0") {
        if (value === "00") {
          setExpireDateError((prev) => ({
            ...prev,
            month: "1 ~ 12월 사이의 숫자를 입력해주세요.",
          }));
          return;
        }
      }
      const month = Number(value);

      if (firstDigit !== "0" && (month < 1 || month > 12)) {
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

  const handleMonthBlur = () => {
    if (expireDate.month.length < 2)
      setExpireDateError((prev) => ({
        ...prev,
        month: "완전히 입력해 주세요.",
      }));
  };

  const handleYearBlur = () => {
    if (expireDate.year.length < 2)
      setExpireDateError((prev) => ({
        ...prev,
        year: "완전히 입력해 주세요.",
      }));
  };

  return {
    expireDate,
    expireDateError,
    handleMonthChange,
    handleYearChange,
    handleMonthBlur,
    handleYearBlur,
  };
}
