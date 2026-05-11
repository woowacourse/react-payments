import { useState } from "react";
import { isNumeric } from "../utils/validators";

const initialState = {
  expireDate: { month: "", year: "" },
  expireDateError: { month: "", year: "" },
};

export function useExpireDateInput() {
  const [expireDate, setExpireDate] = useState(initialState.expireDate);
  const [expireDateError, setExpireDateError] = useState(
    initialState.expireDateError,
  );

  const resetExpireDate = () => {
    setExpireDate(initialState.expireDate);
    setExpireDateError(initialState.expireDateError);
  };

  const handleMonthChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const sliceValue = onlyNumbers.substring(0, 2);
    const firstDigit = value.substring(0, 1);
    const month = Number(sliceValue);

    if (!isNumeric(value)) {
      setExpireDateError((prev) => ({
        ...prev,
        month: "숫자를 입력해주세요.",
      }));
    } else if (value === "00") {
      setExpireDateError((prev) => ({
        ...prev,
        month: "1 ~ 12월 사이의 숫자를 입력해주세요.",
      }));
    } else if (firstDigit !== "0" && (month < 1 || month > 12)) {
      setExpireDateError((prev) => ({
        ...prev,
        month: "1 ~ 12월 사이의 숫자를 입력해주세요.",
      }));
    } else {
      setExpireDateError((prev) => ({
        ...prev,
        month: "",
      }));
    }

    setExpireDate((prev) => ({
      ...prev,
      month: sliceValue,
    }));
  };

  const handleYearChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const sliceValue = onlyNumbers.substring(0, 2);

    if (!isNumeric(value)) {
      setExpireDateError((prev) => ({
        ...prev,
        year: "숫자를 입력해주세요.",
      }));
    } else {
      setExpireDateError((prev) => ({
        ...prev,
        year: "",
      }));
    }

    setExpireDate((prev) => ({
      ...prev,
      year: sliceValue,
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
    resetExpireDate,
  };
}
